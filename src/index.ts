#!/usr/bin/env node
import clipboardy from 'clipboardy'
import { Option, Command } from 'commander';

import { getExcuse } from './utils/get-excuse'

async function main() {
  const program = new Command('Excuse Me')
    .description(
      'A simple CLI made on top of developerexcuses.com to provide you an excuse!'
    )
    .addOption(new Option('-c, --copy', 'Copy the excuse to clipboard').preset(false))

  program.parse()

  const options = program.opts<{ readonly copy: boolean }>()
  const excuse = await getExcuse()

  console.log(excuse)

  if (options.copy) {
    clipboardy.writeSync(excuse)
    console.log('[Copied to clipboard]')
  }
}

main()
