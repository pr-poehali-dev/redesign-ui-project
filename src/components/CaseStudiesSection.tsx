import { motion } from "framer-motion"

export function CaseStudiesSection() {
  const caseStudies = [
    {
      client: "Свадьба Анны и Сергея",
      project: "Оформление свадьбы под ключ",
      metric: "300+ цветов за одну ночь",
      description: "Создали полное цветочное оформление зала, арки для церемонии и букет невесты в стиле рустик.",
      image: "https://cdn.poehali.dev/projects/5a3ff963-1afa-42c5-b129-615eec5d8ec8/files/57af6ebb-ad6c-4da8-88ad-70e8002bfa17.jpg",
    },
    {
      client: "8 марта — массовые заказы",
      project: "Доставка 150 букетов за день",
      metric: "Все доставлены вовремя",
      description: "Организовали доставку 150 индивидуальных букетов в один день без единой задержки.",
      image: "https://cdn.poehali.dev/projects/5a3ff963-1afa-42c5-b129-615eec5d8ec8/files/7449c507-1b3d-4c52-8458-d498d7e28d49.jpg",
    },
    {
      client: "Ресторан «Вечер»",
      project: "Еженедельное украшение столов",
      metric: "Постоянный партнёр 2 года",
      description: "Создаём еженедельные флористические композиции для украшения залов и входной группы.",
      image: "https://cdn.poehali.dev/projects/5a3ff963-1afa-42c5-b129-615eec5d8ec8/files/aee3b69c-6a4c-430a-b0f6-a2ca5f34c187.jpg",
    },
    {
      client: "День рождения Марины",
      project: "Сюрприз-доставка с открыткой",
      metric: "Улыбка гарантирована",
      description: "Оформили коробку с пионами и персональной открыткой — доставили прямо на работу в нужный час.",
      image: "https://cdn.poehali.dev/projects/5a3ff963-1afa-42c5-b129-615eec5d8ec8/files/435c3d1e-072e-478c-a30b-8eaeb3205e62.jpg",
    },
  ]

  return (
    <section className="py-24 px-6 bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="font-serif text-4xl md:text-5xl font-bold mb-4"
          >
            Наши работы
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg text-muted-foreground max-w-2xl mx-auto"
          >
            Реальные истории, за которыми стоят эмоции и особые моменты наших клиентов.
          </motion.p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {caseStudies.map((study, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group bg-secondary rounded-2xl overflow-hidden border border-border hover:border-primary/50 transition-all duration-300"
            >
              <div className="aspect-[3/2] overflow-hidden">
                <img
                  src={study.image || "/placeholder.svg"}
                  alt={study.project}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-8">
                <div className="text-sm font-semibold text-primary mb-2">{study.client}</div>
                <h3 className="font-serif text-2xl font-bold mb-3">{study.project}</h3>
                <div className="text-3xl font-bold text-primary mb-4">{study.metric}</div>
                <p className="text-muted-foreground leading-relaxed">{study.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}