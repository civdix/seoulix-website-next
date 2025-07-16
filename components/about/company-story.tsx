"use client";

import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";

export function CompanyStory() {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold mb-6">Our Story</h2>
            <div className="space-y-4 text-muted-foreground">
              <p>
                Founded in 2019, Seoulix Technologies began as a vision to
                bridge the gap between innovative technology and business
                success. Our journey started with a small team of passionate
                developers who believed in the power of technology to transform
                businesses.
              </p>
              <p>
                Over the years, we have grown into a comprehensive technology
                partner, serving clients across various industries. Our
                commitment to excellence, innovation, and client satisfaction
                has been the driving force behind our success.
              </p>
              <p>
                Today, we continue to push boundaries, embrace new technologies,
                and deliver solutions that not only meet but exceed our clients'
                expectations.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <Card className="p-8">
              <CardContent className="p-0">
                <div className="grid grid-cols-2 gap-6">
                  <div className="text-center">
                    <div className="text-3xl font-bold gradient-text mb-2">
                      5+
                    </div>
                    <div className="text-sm text-muted-foreground">
                      Years of Excellence
                    </div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold gradient-text mb-2">
                      100+
                    </div>
                    <div className="text-sm text-muted-foreground">
                      Projects Delivered
                    </div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold gradient-text mb-2">
                      50+
                    </div>
                    <div className="text-sm text-muted-foreground">
                      Happy Clients
                    </div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold gradient-text mb-2">
                      15+
                    </div>
                    <div className="text-sm text-muted-foreground">
                      Team Members
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
