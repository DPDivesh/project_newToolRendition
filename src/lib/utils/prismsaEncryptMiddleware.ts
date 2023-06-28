import {fieldEncryptionMiddleware} from "prisma-field-encryption"
import { PrismaClient } from "@prisma/client"

export const client = new PrismaClient()

client.$use(fieldEncryptionMiddleware())
