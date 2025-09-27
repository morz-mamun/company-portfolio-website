export type TServiceDescription = {
  title: string;
  descriptionOne?: string;
  descriptionTwo?: string;
  image: string;
  isLink?: boolean;
};

export type TSubServiceTitleAndDescription = {
  title: string;
  description: string;
  image: string;
  imageAlt?: string;
};
export type TSubServices = {
  title: string;
  icon: string;
};

export type TServices = {
  data: {
    title: string;
    description: string;
    image: string;
    imageAlt?: string;
  };
  subServices: TSubServices[];
  styleClasses?: {
    ServiceTitleAndDescriptionClass?: string;
    subServicesClass?: string;
  };
};

// why choose us data type
export type TMarqueeData = {
  icon: string;
  title: string;
};
export type TWhyChooseUs = {
  marqueeData: TMarqueeData[];
  sectionTitle: string;
};
