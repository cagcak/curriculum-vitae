import { Injectable } from '@nestjs/common';

@Injectable()
export class CommonService {
  generateFieldDescription(
    options?: Partial<{
      optional: boolean;
      nullable: boolean;
      defaultValue: string | boolean;
    }>
  ) {
    const { defaultValue = true, nullable = true, optional = true } =
      options || {};

    return `
This field
- ${defaultValue ? 'have a default value' : 'must be declared with a value'}
- ${nullable ? 'can be declared as null' : 'cannot be null'}
- ${optional ? 'is optional' : 'is mandatory'}
`;
  }

  generateDeprecationReasonDescription(options?: Partial<{ reason: string }>) {
    const { reason = 'because of some mutation definions' } = options || {};

    return `This mutation is useless ${reason} and will be deleted soon`;
  }
}
