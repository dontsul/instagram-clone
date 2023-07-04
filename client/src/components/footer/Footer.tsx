const footerElem = [
  { title: "Meta" },
  { title: "About" },
  { title: "Blog" },
  { title: "Jobs" },
  { title: "Help" },
  { title: "API" },
  { title: "Privacy" },
  { title: "Terms" },
  { title: "Top Accounts" },
  { title: "Locations" },
  { title: "Instagram Lite" },
  { title: "Contact Uploading & Non-Users" },
  { title: "Meta Verified" },
]

export const Footer = () => {
  return (
    <footer>
      <ul className="flex flex-wrap items-center justify-center space-x-[20px]">
        {footerElem.map((el, i) => (
          <li className="text-gray-400 text-xs mb-[16px]" key={i}>
            {el.title}
          </li>
        ))}
      </ul>
      <div className="flex items-center justify-center text-gray-400 text-xs mb-12">
        © 2023 Instagram from Meta
      </div>
    </footer>
  )
}
