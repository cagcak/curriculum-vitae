import { Injectable } from '@angular/core';

@Injectable()
export class ResumeTemplateAbstract<T> {
  resumeValue: T;
}

// export class IstanbulTemplate extends ResumeTemplateAbstract {
//   showSecondLine: boolean;
// }
