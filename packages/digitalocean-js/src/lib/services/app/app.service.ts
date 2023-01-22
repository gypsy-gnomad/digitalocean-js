import { instance } from '../../axios-instance';

import { Account } from '../../models';

export class AppService {
  /**
   * Get the app platform information associated with the provided credentials
   *
   * ### Example
   * ```js
   * import { DigitalOcean } from 'digitalocean-js';
   *
   * const client = new DigitalOcean('your-api-key');
   * const account = await client.account.getUserInformation();
   * ```
   */
  public async getUserInformation(): Promise<Account> {
    return instance.get('/app').then( (response: any) => response.data.account);
  }
}
