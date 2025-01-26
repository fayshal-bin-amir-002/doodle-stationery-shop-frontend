import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Container from "../shared/Container";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import StarRatings from "react-star-ratings";

const reviews = [
  {
    name: "Ayesha Rahman",
    avatar: "https://github.com/shadcn.png",
    rating: 5,
    review: "Doodle Stationery has everything I need!",
  },
  {
    name: "Mohammad Hossain",
    avatar: "https://github.com/shadcn.png",
    rating: 4,
    review: "The quality of the notebooks and pens is amazing.",
  },
  {
    name: "Rina Akter",
    avatar: "https://github.com/shadcn.png",
    rating: 5,
    review: "I’m in love with the cute and creative packaging! ",
  },
  {
    name: "Tanvir Ahmed",
    avatar: "https://github.com/shadcn.png",
    rating: 4,
    review: "Good range of products and reasonable prices.",
  },
  {
    name: "Farah Khan",
    avatar: "https://github.com/shadcn.png",
    rating: 5,
    review: "As a teacher, I love how organized and creative the shop is.",
  },
];

const Testimonial = () => {
  return (
    <div className="my-12 md:my-16 lg:my-20">
      <Container>
        <div className="text-center">
          <h3 className="text-2xl md:text-3xl lg:text-4xl font-semibold mb-6 md:mb-8 lg:mb-10">
            Testimonials
          </h3>
        </div>
        <Carousel className="w-[70%] mx-auto">
          <CarouselContent className="-ml-1">
            {reviews.map((review, index) => (
              <CarouselItem
                key={index}
                className="pl-1 basis-11/12 md:basis-1/2 lg:basis-1/3"
              >
                <div className="p-1">
                  <Card>
                    <CardContent className="flex aspect-square items-center justify-center p-6">
                      <div className="flex flex-col items-center gap-3">
                        <Avatar>
                          <AvatarImage
                            src="https://github.com/shadcn.png"
                            alt="@shadcn"
                          />
                          <AvatarFallback>CN</AvatarFallback>
                        </Avatar>
                        <p className="font-medium">{review?.name}</p>
                        <StarRatings
                          rating={review?.rating}
                          starRatedColor="blue"
                          starSpacing="4px"
                          numberOfStars={5}
                          name="rating"
                          starDimension={"24px"}
                        />
                        <p className="text-gray-600 text-center pt-3">
                          {review?.review}
                        </p>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </Container>
    </div>
  );
};

export default Testimonial;
