import React from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
//! component
import { Button } from "@/components/atom/Button";

//! images
import egypt from "../../images/card/egypt.jpg";
import jordan from "../../images/card/jordan.jpg";
import turkey from "../../images/card/turkey.jpg";
//! hooks
import { useQueryState } from "@/hooks/useQueryState";

gsap.registerPlugin(ScrollTrigger);

export const Tours = () => {
  React.useEffect(() => {
    // gsap.fromTo(
    //   ".tours-headline",
    //   {
    //     autoAlpha: 0,
    //     x: 200,
    //   },
    //   {
    //     autoAlpha: 1,
    //     x: 0,
    //     duration: 1,
    //     delay: 1,
    //     scrollTrigger: {
    //       trigger: ".tours-wrapper",
    //       start: "top+=100px bottom",
    //       end: "top+=100px bottom",
    //       // markers: true,
    //     },
    //   }
    // );
    gsap.fromTo(
      [".tours-content-wrappter"],
      {
        autoAlpha: 0,
        y: 500,
      },
      {
        autoAlpha: 1,
        y: 0,
        duration: 0.5,
        // delay: 0.5,
        scrollTrigger: {
          trigger: ".tours-wrapper",
          start: "top+=100px bottom",
          end: "top+=100px bottom",
          // markers: true,
        },
      }
    );
    gsap.fromTo(
      [".tours-description"],
      {
        autoAlpha: 0,
      },
      {
        autoAlpha: 1,
        duration: 0.5,
        // delay: 0.5,
        scrollTrigger: {
          trigger: ".tours-wrapper",
          start: "top+=100px bottom",
          end: "top+=100px bottom",
          // markers: true,
        },
      }
    );
    //? tours-descriptionのパララックス
    gsap.fromTo(
      ".tours-description",
      {
        y: 0,
      },
      {
        y: -30,
        scrollTrigger: {
          trigger: ".tours-wrapper",
          start: "top bottom",
          end: "bottom bottom",
          scrub: true,
        },
      }
    );
  }, []);

  const cards = [
    {
      img: egypt,
      title: "Egypt",
      text: "egypt tours description Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt",
    },
    {
      img: jordan,
      title: "Jordan",
      text: "jordan tours description Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu.",
    },
    {
      img: turkey,
      title: "Turkey",
      text: "turkey tours description Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim",
    },
  ];

  const tourswrapper = React.useRef<HTMLElement>(null);
  const [toursRef, setTourswrapper] = useQueryState<HTMLElement>("ref/tours");
  React.useEffect(() => {
    if (!tourswrapper.current) return;
    setTourswrapper(tourswrapper.current);
  }, [tourswrapper]);

  const [isHover, setIsHover] = React.useState({ Egypt: false, Jordan: false, Turkey: false });

  const click = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    e.preventDefault();
    console.log("click");
  };

  return (
    <>
      <section ref={tourswrapper} className="tours-wrapper">
        <h1 className="tours-headline">Tours</h1>

        <div className="tours-image-container">
          <div className="tours-description">
            <p>
              この文章はダミーです。
              文字の大きさ、量、字間、行間等を確認するために入れています。この文章はダミーです。文字の大きさ、量、字間、行間等を確認するために入れています。この文章はダミーです。文字の大きさ、量、字間、行間等を確認するために入れています。この文章はダミーです。文字の大きさ
            </p>
            <Button>Read More</Button>
          </div>
          <ul className={`tours-content-wrappter`}>
            {cards.map(({ img, text, title }) => (
              <li className="tours-content" key={title}>
                <figure
                  data-title={title}
                  className={`tours-content_item`}
                  onMouseEnter={() =>
                    setIsHover((v) => {
                      return { ...v, [title]: true };
                    })
                  }
                  onMouseLeave={() =>
                    setIsHover((v) => {
                      return { ...v, [title]: false };
                    })
                  }
                >
                  <a
                    href="/"
                    onClick={click}
                    className={`tours-content_item_l ${
                      // @ts-ignore
                      isHover[title] ? `tours-content_item_l_active` : `tours-content_item_l_inactive`
                    }`}
                  >
                    <span>{title}</span>
                  </a>
                  <img
                    className={`tours-content_item_img ${
                      // @ts-ignore
                      isHover[title] ? `tours-content_item_img_active` : `tours-content_item_img_inactive`
                    }`}
                    src={img}
                    alt={title}
                    width="100%"
                    height="100%"
                  />
                </figure>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </>
  );
};
