import { Client as workflowClient } from "@upstash/workflow";  
import {QSTASH_URL, QSTASH_TOKEN} from './env.js';

export const workflowClient = new workflowClient({
    baseUrl: QSTASH_URL,
    token: QSTASH_TOKEN,
});

