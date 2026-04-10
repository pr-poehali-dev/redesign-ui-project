import { TestimonialSlider, type Testimonial } from "@/components/ui/testimonial-slider"

const testimonials: Testimonial[] = [
  {
    image: "/placeholder.svg?height=400&width=400",
    quote:
      "Заказывала букет на свадьбу подруги — всё было просто идеально! Цветы свежайшие, упаковка восхитительная, а доставили прямо к нужному времени. Теперь заказываю только здесь.",
    name: "Мария Иванова",
    role: "Постоянный клиент",
    rating: 5,
  },
  {
    image: "/placeholder.svg?height=400&width=400",
    quote:
      "Попросил собрать сюрприз-букет для мамы на день рождения. Флорист сам предложил состав и оформление — получилось лучше, чем я мог представить. Мама была в слезах от радости!",
    name: "Дмитрий Попов",
    role: "Клиент магазина",
    rating: 5,
  },
  {
    image: "/placeholder.svg?height=400&width=400",
    quote:
      "Мы заказываем украшение нашего ресторана каждую неделю уже больше года. Всегда свежо, красиво и точно в срок. Гости часто спрашивают, где мы берём такие цветы — рекомендую всем!",
    name: "Ольга Смирнова",
    role: "Управляющая рестораном",
    rating: 5,
  },
]

export function TestimonialsSection() {
  return (
    <section className="py-32 px-4 bg-background overflow-visible">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="font-serif text-4xl md:text-5xl font-bold mb-4 text-balance">Что говорят клиенты</h2>
          <p className="font-sans text-lg text-muted-foreground max-w-2xl mx-auto">
            Нам не нужно рассказывать о себе — пусть говорят те, кто уже получил свой букет.
          </p>
        </div>
        <TestimonialSlider testimonials={testimonials} />
      </div>
    </section>
  )
}