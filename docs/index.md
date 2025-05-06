# IndieCaster

## 🚀 Project Structure

```text
/
├── public/
│   ├── episode-artwork/
│   ├── profile-images/
│   ├── favicon.ico
├── src/
│   └── pages/
│       └── index.astro
└── package.json
```

## Adding a new episode

To add a new episode, create a new markdown file in the `src/pages/episodes` directory.

### The filename

The name of the file will be the URL slug for the episode. For example, `src/pages/episodes/mic-check-the-independence-edition.md` will be available at `https://your-site.com/episodes/mic-check-the-independence-edition`.

### The frontmatter

The file should have the following frontmatter (meta data):

```markdown
---
layout: "../../layouts/EpisodeLayout.astro"
title: "Mic Check: The Independence Edition"
pubDate: January 22, 2025
description: "Adrienne Lowe dives into a candid chat with Kai Simmons about the triumphs and trials of independent podcasting in a world dominated by media giants."
host: "Schalk Neethling"
hostProfilePicture: "schalk-neethling"
guest: "Jane Springfield"
guestProfilePicture: "jane-springfield"
episodeArtwork:
  src: "episode003"
  alt: ""
episodeAudio: "promo"
tags: ["indie", "indie podcasters", "indiecaster", promo]
---
```

The `layout` property will always be as in the example unless have nested the episode inside a sub folder. For every level you nest the episode inside, you need to add an additional `../` to the `layout` property.

Use the `title` property to set the episode title. This will be used as the primary heading and the title shown in the browser tab.

The `pubDate` property is the date the episode was published. This will be used to sort episodes on the episode list.

The `description` property is a short description of the episode. This will be used as the meta description and shown on the episode list and by search engines. You can use a tool such as [HuggingFace Chat](https://huggingface.co/chat/) along with a prompt similar to the following to get a description for your episode:

```text
Please write a meta description for the following content. Limit the description to 160 characters and ensure it is SEO-optimized:
```

The `host` property is the name of the host for the episode. The same apply for the `guest` property.

The `hostProfilePicture` and `guestProfilePicture` property is the filename of the host and guest's profile picture. This should be a square image and should be placed in the `public/profile-images` directory. For performance optimisation IndieCaster uses a component that expects three version of the profile image.

1. A 400x400px image using the AVIF format.
2. A 400x400px image using the WebP format.
3. A 200x200px image using the PNG format.

When specifying the filename do not include the file extension. For example, if the host's profile picture is `schalk-neethling.png`, the `hostProfilePicture` property should be `schalk-neethling`.

#### Helpful note

With a 400x400px PNG image, you can use a service like [Squoosh](https://squoosh.app/) to convert the image to AVIF and WebP formats. When saving the AVIF and WebP files, ensure that you add `@2x` to the filename. For example, if the original PNG image is `schalk-neethling.png`, the AVIF and WebP files should be `schalk-neethling@2x.avif`.

> NOTE: There is no need to include the `@2x` in the profile picture property. The component will automatically add it when it looks for the image.

You can also resize the image to 200x200px using Squoosh for the final PNG image. You can then use a service like [TinyPNG](https://tinypng.com/) to optimise the filesize of the PNG image.

The `episodeArtwork` property is an object with `src` and `alt` properties. The `src` property is the filename of the episode artwork. This should be a square image and should be placed in the `public/episode-artwork` directory. The `alt` property is the alt text for the image. Generally you can leave this as an empty string as the image is purely decorative however, if the image contains text, you should include the text in the `alt` property.

Below are some resources to learn about creating the ultimate podcast artwork:

- [Artwork requirement for Apple Podcasts](https://podcasters.apple.com/support/896-artwork-requirements)
- [Spotify do's and dont's of podcast artwork](https://podcasters.spotify.com/resources/learn/create/dos-donts-coverart)

> NOTE: For the episode artwork, you can use a service like [Canva](https://www.canva.com/) to create the artwork. The same file formats apply as for the profile pictures. We have had great results using a `2048x2048px` size for the AVIF and WebP formats and a `1024x1024px` size for the PNG format.

The `episodeAudio` property is the filename of the episode audio. This should be an MP3 file and should be placed in the `public/audio` directory. The filename should not include the file extension. For example, if the episode audio is `promo.mp3`, the `episodeAudio` property should be `promo`.

The `tags` property is an array of tags for the episode. These tags will be used to filter episodes on the relevant tag page.

The `youtube` property is the YouTube video ID for the episode. This should be the ID from the URL of the video. For example, if the URL of the video is `https://www.youtube.com/watch?v=spL72oeLiVo`, the `youtube` property should be `spL72oeLiVo`. If not set, the YouTube video will not be displayed on the episode page.

### The content

After the frontmatter, you can add the episode content. This can be written in Markdown.
