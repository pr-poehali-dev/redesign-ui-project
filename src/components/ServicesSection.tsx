import { motion } from "framer-motion"

export function ServicesSection() {
  const services = [
    {
      title: "Букеты из роз и пионов",
      image: "https://cdn.poehali.dev/projects/5a3ff963-1afa-42c5-b129-615eec5d8ec8/files/7449c507-1b3d-4c52-8458-d498d7e28d49.jpg",
      overlayImage: "https://cdn.poehali.dev/projects/5a3ff963-1afa-42c5-b129-615eec5d8ec8/files/5a1b0e90-0720-49fd-bec1-033ce780bd00.jpg",
    },
    {
      title: "Свадебные украшения",
      image: "https://cdn.poehali.dev/projects/5a3ff963-1afa-42c5-b129-615eec5d8ec8/files/57af6ebb-ad6c-4da8-88ad-70e8002bfa17.jpg",
      overlayImage: "https://cdn.poehali.dev/projects/5a3ff963-1afa-42c5-b129-615eec5d8ec8/files/7449c507-1b3d-4c52-8458-d498d7e28d49.jpg",
    },
    {
      title: "Цветы в коробках и шляпках",
      image: "https://cdn.poehali.dev/projects/5a3ff963-1afa-42c5-b129-615eec5d8ec8/files/435c3d1e-072e-478c-a30b-8eaeb3205e62.jpg",
      overlayImage: "https://cdn.poehali.dev/projects/5a3ff963-1afa-42c5-b129-615eec5d8ec8/files/aee3b69c-6a4c-430a-b0f6-a2ca5f34c187.jpg",
    },
    {
      title: "Корпоративное оформление",
      image: "https://cdn.poehali.dev/projects/5a3ff963-1afa-42c5-b129-615eec5d8ec8/files/aee3b69c-6a4c-430a-b0f6-a2ca5f34c187.jpg",
      overlayImage: "https://cdn.poehali.dev/projects/5a3ff963-1afa-42c5-b129-615eec5d8ec8/files/435c3d1e-072e-478c-a30b-8eaeb3205e62.jpg",
    },
  ]

  return (
    <section className="py-20 px-4 sm:px-6 w-full bg-background">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="font-serif text-5xl sm:text-6xl lg:text-7xl font-normal text-foreground mb-4 tracking-tight"
          >
            Наши букеты
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="font-sans text-lg sm:text-xl text-muted-foreground"
          >
            Авторские букеты для любого повода — от романтики до торжественных событий.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 lg:gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group bg-secondary/30 rounded-3xl p-8 flex flex-col h-[320px] transition-all duration-300 hover:bg-secondary/50"
            >
              <div className="relative flex-grow flex items-center justify-center mb-6">
                <img
                  src={service.image || "/placeholder.svg"}
                  alt={`${service.title} showcase`}
                  className="absolute w-44 h-auto rounded-lg shadow-md transform -rotate-6 transition-all duration-400 ease-in-out group-hover:rotate-[-10deg] group-hover:scale-105"
                />
                <img
                  src={service.overlayImage || "/placeholder.svg"}
                  alt={`${service.title} example`}
                  className="absolute w-44 h-auto rounded-lg shadow-lg transform rotate-3 transition-all duration-400 ease-in-out group-hover:rotate-[5deg] group-hover:scale-105"
                />
              </div>

              <h3 className="font-sans text-left text-lg font-medium text-foreground mt-auto">{service.title}</h3>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}