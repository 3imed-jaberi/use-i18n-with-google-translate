import 'make-promises-safe'
import path from 'path'
import fs from 'fs/promises'
import translate from '@iamtraction/google-translate'
import type { PathLike } from 'fs'

type Config = {
  from?: string
  to?: string
}

export async function useI18nWithGoogleTranslate(
  inputFile: PathLike,
  outputFile: PathLike,
  config: Config = { from: 'en', to: 'ar' }
): Promise<void> {
  const inputFilePath = path.resolve(process.cwd(), inputFile as string)
  const jsonBuffer = await fs.readFile(inputFilePath)
  const jsonObject = JSON.parse(jsonBuffer.toString())

  async function withGoogleTranslate(jsonContent) {
    for (const key in jsonContent) {
      const value = jsonContent[key];
  
      if (typeof value === 'object') {
        await withGoogleTranslate(value)
      }
  
      if (typeof value === 'string') {
        jsonContent[key] = (await translate(value, config)).text
      }
    }

    return jsonContent
  }

  const jsonObjectResult = await withGoogleTranslate(jsonObject)
  const jsonString = JSON.stringify(jsonObjectResult, null, 2)
  const outputFilePath = path.resolve(process.cwd(), outputFile as string)
  await fs.writeFile(outputFilePath, jsonString)
}
