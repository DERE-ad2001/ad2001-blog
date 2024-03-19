interface Project {
  title: string
  description: string
  href?: string
  imgSrc?: string
}

const projectsData: Project[] = [
  {
    title: 'Frida Labs',
    description: `This repository contains a series of challenges designed for learning Frida for Android. These are not like hardcore Capture The Flag (CTF) applications but will help you to start with Frida and its commonly used APIs. If you are entirely new to Frida, this is the perfect repository to get started. I have organized the challenges in a way that covers everything from the basics to an intermediate level.`,
    imgSrc: '/static/images/projects/frida-labs.png',
    href: 'https://github.com/DERE-ad2001/Frida-Labs',
  },
  {
    title: "A Noob's Guide to ARM Exploitation",
    description: `This book is useful for anyone who wants to start their journey on ARM exploitation. This is a beginner-friendly guide. Even though it's beginner-friendly there are some prerequisites. Anyone interested in software exploitation in ARM can follow this book.`,
    imgSrc: '/static/images/projects/arm.png',
    href: 'https://ad2001.gitbook.io',
  },
]

export default projectsData
