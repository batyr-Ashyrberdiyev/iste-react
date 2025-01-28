import { cn } from "@/lib/utils";
import { FC } from "react";
import { ContactCard, Container, TimeCard } from "../";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

interface Props {
  className?: string;
}

export const times = [
  {
    name: "Монтаж выставки",
    date: "1 — 27 апреля 2025 года",
  },
  {
    name: "Работа",
    date: "29 — 1 мая 2025 года",
  },
  {
    name: "Демонтаж",
    date: "1 — 2 мая 2025 года",
  },
];

const contacts = [
  {
    title: "contact@turkmenexpo.com",
    subtitle: "Адрес электронной почты",
    img: "/contacts/mail.svg",
  },
  {
    title: "здание ТПП Туркменистана",
    subtitle: "Адрес выставки",
    img: "/contacts/location.svg",
  },
  {
    title: "+99371871814; 99363719588",
    subtitle: "Контактный номер",
    img: "/contacts/mobile.svg",
  },
];

export const HomeTime: FC<Props> = ({ className }) => {
  return (
    <section className={cn("bg-surface_high pt-10 pb-20", className)}>
      <Container>
        <h2 className="h2 mb-10">Время мероприятий</h2>

        <div className="flex flex-col gap-6">
          <div className="flex items-center gap-6">
            {times.map((item) => (
              <TimeCard {...item} key={item.name} className="w-full" />
            ))}
          </div>

          <div className="p-10 flex items-center gap-6">
            {contacts.map((item) => (
              <ContactCard {...item} key={item.title} className="w-full" />
            ))}
          </div>

          <Link to="/stand-form" className="w-fit mx-auto">
            <Button>Забронируйте стенд в качестве экспонента</Button>
          </Link>
        </div>
      </Container>
    </section>
  );
};
