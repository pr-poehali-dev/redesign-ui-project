import { motion } from "framer-motion"

export function StatsSection() {
  return (
    <section className="py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="font-serif text-4xl md:text-5xl lg:text-6xl text-center mb-16 leading-tight text-balance"
        >
          <span className="text-accent">Дарим радость</span> каждый день — свежие цветы и{" "}
          <span className="text-accent">тёплые эмоции</span> с доставкой прямо к вашей двери.
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="border-2 border-dashed border-border rounded-3xl p-8 text-center"
          >
            <div className="mb-4">
              <span className="font-serif text-7xl md:text-8xl font-bold">500</span>
              <span className="text-accent text-5xl md:text-6xl font-serif font-bold">+</span>
            </div>
            <h3 className="font-serif text-2xl font-semibold mb-4">Счастливых клиентов</h3>
            <p className="text-muted-foreground font-sans leading-relaxed">
              Более 500 человек уже выбрали нас для особых моментов своей жизни.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="border-2 border-dashed border-border rounded-3xl p-8 text-center"
          >
            <div className="mb-4">
              <span className="font-serif text-7xl md:text-8xl font-bold">2</span>
              <span className="text-accent text-5xl md:text-6xl font-serif font-bold">ч</span>
            </div>
            <h3 className="font-serif text-2xl font-semibold mb-4">Время доставки</h3>
            <p className="text-muted-foreground font-sans leading-relaxed">
              Доставляем свежие букеты в течение 2 часов по всему городу — быстро и бережно.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="border-2 border-dashed border-border rounded-3xl p-8 text-center"
          >
            <div className="mb-4">
              <span className="font-serif text-7xl md:text-8xl font-bold">50</span>
              <span className="text-accent text-5xl md:text-6xl font-serif font-bold">+</span>
            </div>
            <h3 className="font-serif text-2xl font-semibold mb-4">Видов цветов</h3>
            <p className="text-muted-foreground font-sans leading-relaxed">
              Розы, пионы, тюльпаны, орхидеи — всегда свежие и прямо с лучших плантаций.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  )
}