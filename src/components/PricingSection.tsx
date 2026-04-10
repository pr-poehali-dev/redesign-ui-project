import { Button } from "@/components/ui/3d-button"
import { Check } from "lucide-react"
import { motion } from "framer-motion"

export function PricingSection() {
  const plans = [
    {
      name: "Базовый букет",
      price: "от 1 500 ₽",
      period: "за букет",
      description: "Свежий букет на каждый день — для тех, кто хочет порадовать близких просто так.",
      features: [
        "5–7 стеблей на выбор",
        "Базовая упаковка",
        "Персональная открытка",
        "Доставка за 2 часа",
        "Гарантия свежести 5 дней",
      ],
    },
    {
      name: "Авторский букет",
      price: "от 3 500 ₽",
      period: "за букет",
      description: "Для особых поводов — пышные композиции с редкими цветами и премиальной упаковкой.",
      features: [
        "15–25 стеблей premium",
        "Дизайнерская упаковка",
        "Персональная открытка",
        "Доставка к точному времени",
        "Гарантия свежести 7 дней",
        "Консультация флориста",
        "Фото букета до доставки",
      ],
      featured: true,
    },
    {
      name: "Корпоратив",
      price: "По запросу",
      period: "свяжитесь с нами",
      description: "Для ресторанов, офисов и мероприятий — регулярное оформление под ваши нужды.",
      features: [
        "Еженедельные поставки",
        "Персональный флорист",
        "Оформление под брендбук",
        "Приоритетная доставка",
        "Индивидуальный прайс",
        "Аккаунт-менеджер",
        "Декор мероприятий",
        "Скидки постоянным клиентам",
      ],
    },
  ]

  return (
    <section className="py-24 px-6 bg-secondary">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="font-serif text-4xl md:text-5xl font-bold mb-4"
          >
            Цены на букеты
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg text-muted-foreground max-w-2xl mx-auto"
          >
            Честные цены без наценок — только свежие цветы и забота о каждом заказе.
          </motion.p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className={`rounded-2xl p-8 border-2 ${
                plan.featured ? "bg-background border-primary shadow-lg scale-105" : "bg-background border-border"
              }`}
            >
              {plan.featured && (
                <div className="text-xs font-bold text-primary uppercase tracking-wider mb-4">Популярный</div>
              )}
              <h3 className="font-serif text-2xl font-bold mb-2">{plan.name}</h3>
              <div className="mb-4">
                <span className="text-4xl font-bold">{plan.price}</span>
                <span className="text-muted-foreground ml-2">{plan.period}</span>
              </div>
              <p className="text-muted-foreground mb-6 leading-relaxed">{plan.description}</p>
              <Button stretch className="mb-6 rounded-full">
                Заказать
              </Button>
              <div className="space-y-3">
                {plan.features.map((feature, featureIndex) => (
                  <div key={featureIndex} className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-sm">{feature}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}