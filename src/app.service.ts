import { Injectable } from '@nestjs/common';
import { DiamondDto } from './Diamond.dto';
import { createHash } from 'crypto';
import stringify = require('json-stable-stringify');

@Injectable()
export class AppService {

  getHealth(): string {
    let seconds = process.uptime();
    const hours   = Math.floor(seconds/3600);
    seconds     = seconds % 3600;
    const mins    = Math.floor(seconds/60);
    seconds     = Math.floor(seconds % 60);

    let hh = String(hours);
    let mm = String(mins);
    let ss = String(seconds);

    if(hours < 10) {
      hh = `0${hours}`;
    }

    if(mins < 10) {
      mm = `0${mins}`;
    }

    if(seconds < 10) {
      ss = `0${seconds}`;
    }

    return [hh, mm, ss].join(':')
  }

  createHash(diamondDto: DiamondDto): string {
    const diamondString = stringify(diamondDto);
    return createHash('sha256').update(diamondString).digest('hex');
  }
}
