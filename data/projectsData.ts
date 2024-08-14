interface Project {
  title: string,
  description: string,
  href?: string,
  imgSrc?: string,
}

const projectsData: Project[] = [
  {
    title: 'Manipulator',
    description: ` Tool that allows you to perform various operations on a text file, including appending lines, deleting lines by content or line number, and searching for lines containing a specific string. `,
    imgSrc: '/static/images/assetviz.png',
    href: 'https://github.com/buraaqsec/manipulator',
  },
]

export default projectsData