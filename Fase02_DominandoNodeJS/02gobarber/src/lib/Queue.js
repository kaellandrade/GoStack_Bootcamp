import Bee from 'bee-queue';
import CancellationMail from '../app/jobs/CancellationMail';
import redisConfig from '../config/redis';

const jobs = [CancellationMail];

/**
 * Uma fila para cada backgroundJob
 */
class Queue {
    constructor() {
        this.queues = {};
        this.init();
    }
    init() {
        jobs.forEach(({ key, handle }) => {
            this.queues[key] = {
                bee: new Bee(key, {
                    redis: redisConfig,
                }),
                handle,
            };
        });
    }
    add(queue, job) {
        return this.queues[queue].bee.createJob(job).save();
    }
    processQueue() {
        jobs.forEach((job) => {
            const { bee, handle } = this.queues[job.key];

            bee.process(handle);
        });
    }
}
export default new Queue();
