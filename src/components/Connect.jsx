import GitHub from "/assets/connect/github.png";
import Email from "/assets/connect/email.png";
import LinkedIn from "/assets/connect/linkedin.png";
import Telegram from "/assets/connect/telegram.png";
import Phone from "/assets/connect/telephone.png";
import Blog from "/assets/connect/blog.png";

export default function Connect() {
  const connects = [
    { title: "Telefon", link: "tel:+99888729129", icon: Phone },
    {
      title: "Email",
      link: "mailto:mirzoulugbekkhudoyberdiyev@gmail.com?subject=Assalomu%20aleykum",
      icon: Email,
    },
    {
      title: "GitHub",
      link: "https://github.com/mirzobox",
      icon: GitHub,
    },
    {
      title: "LinkedIn",
      link: "https://www.linkedin.com/in/mirzobox",
      icon: LinkedIn,
    },
    { title: "Telegram", link: "https://t.me/mirzobox", icon: Telegram },
    { title: "Blog", link: "https://t.me/insightforeveryone", icon: Blog },
  ];

  return (
    <ul className="flex flex-col gap-3">
      {connects.map(({ title, link, icon }) => {
        return (
          <li className="flex items-center gap-2" key={title}>
            <img
              className="h-8 w-8 object-contain"
              src={icon}
              alt={title}
              width="32"
              height="32"
            />
            <a
              className="text-blue-500 underline hover:no-underline"
              href={link}
              target="_blank"
            >
              {title}
            </a>
          </li>
        );
      })}
    </ul>
  );
}
