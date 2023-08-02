import React from "react";
import EventCard from "../components/EventCard";
import event1Bg from "../../../Assets/Material/event1-bg.png";
import event2Bg from "../../../Assets/Material/event2-bg.png";
import event3Bg from "../../../Assets/Material/event3-bg.png";
import event4Bg from "../../../Assets/Material/event4-bg.png";

const Events = () => {
  return (
    <div className="mt-10 mb-16 md:my-20 flex flex-col gap-y-4 md:gap-y-16 w-full h-auto">
      <EventCard
        first="Lorem Ipsum"
        second="A New Event"
        third="Lorem Ipsum Dolor Sit Amet"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat."
        image={event1Bg}
        link="./events"
      />
      <EventCard
        first="Lorem Ipsum"
        second="A New Event"
        third="Lorem Ipsum Dolor Sit Amet"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat."
        image={event2Bg}
        link="./events"
      />
      <EventCard
        first="Lorem Ipsum"
        second="A New Event"
        third="Lorem Ipsum Dolor Sit Amet"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat."
        image={event3Bg}
        link="./events"
      />
      <EventCard
        first="Lorem Ipsum"
        second="A New Event"
        third="Lorem Ipsum Dolor Sit Amet"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat."
        image={event4Bg}
        link="./events"
      />
    </div>
  );
};

export default Events;
