import {
  resourcesLinks,
  platformLinks,
  communityLinks
} from "../constants/index";

const Footer = () => {
  return (
    <div className="mb-2 border-t border-neutral-500">
      <div className="flex flex-wrap justify-center my-4 mx-6">
        <div className="flex flex-col me-4 ">
          <h2 className="my-3">Resources</h2>
          {resourcesLinks.map((link: any) => {
            return (
              <ul>
                <li className="text-sm text-neutral-400 mb-2">
                  <a className="hover:text-white" href={link.href}>
                    {link.text}
                  </a>
                </li>
              </ul>
            );
          })}
        </div>
        <div className="flex flex-col me-5">
          <h2 className="my-3">Platforms</h2>
          {platformLinks.map((link: any) => {
            return (
              <ul>
                <li className="text-sm text-neutral-400 mb-2">
                  <a className="hover:text-white" href={link.href}>
                    {link.text}
                  </a>
                </li>
              </ul>
            );
          })}
        </div>
        <div className="flex flex-col ">
          <h2 className="my-3">Community</h2>
          {communityLinks.map((link: any) => {
            return (
              <ul>
                <li className="text-sm text-neutral-400 mb-2">
                  <a href={link.href} className="hover:text-white">
                    {link.text}
                  </a>
                </li>
              </ul>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Footer;
