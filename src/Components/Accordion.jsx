import { useState } from "react";
import { ChevronDownIcon } from "@heroicons/react/24/outline";
const data = [
  {
    id: 1,
    title: "Accordion One",
    text: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Amet, natus!",
  },
  {
    id: 2,
    title: "Accordion Two",
    text: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Amet, natus!",
  },
  {
    id: 3,
    title: "Accordion Three",
    text: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Amet, natus!",
  },
];

function Accordion() {
  const [open, setOpen] = useState(null);

  return (
    <div className="accordion container">
      {data.map((item) => (
        <AccordionItem
          key={item.id}
          id={item.id}
          title={item.title}
          setOpen={setOpen}
          open={open}
        >
          {item.text}
        </AccordionItem>
      ))}
      <AccordionItem
        id={4}
        title="Another Accordion"
        setOpen={setOpen}
        open={open}
      >
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolor vel
          soluta molestiae sint consequatur maxime excepturi, architecto
          accusamus impedit quibusdam!
        </p>
        <ul>
          <li>one</li>
          <li>two</li>
        </ul>
        <a href="#">Hi</a>
      </AccordionItem>
    </div>
  );
}

export default Accordion;

function AccordionItem({ id, title, setOpen, open, children }) {
  // آیدی آیتم برابر بود با اون آیتم که کلیک شده
  const isOpen = id === open;
  return (
    <div className={`accordion-item ${isOpen ? "accordion__expanded" : ""}`}>
      <div
        className="accordion-item__header"
        // اون آی دی که کاربر انتخاب میکنه با اون محتوایی که بازه یکی بود نال کن محتوا را غیر فعال کن در غیر اینصورت آیدی انتخاب شده را نمایش بده
        onClick={() => setOpen(id === open ? null : id)}
      >
        <div>{title}</div>
        <ChevronDownIcon
          className="accordion-item__chevron"
          //   style={{
          //     width: "1.5rem",
          //     transition: "all 0.3s ease-out",
          //     color: "green",
          //     rotate: isOpen ? "180deg" : "0deg",
          //   }}
        />
      </div>
      <div className="accordion-item__content">{children}</div>
      {/* {isOpen && <div className="accordion-item__content">{item.text}</div>} */}
    </div>
  );
}
