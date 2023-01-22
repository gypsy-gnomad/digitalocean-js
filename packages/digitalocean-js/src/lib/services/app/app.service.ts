import { instance } from '../../axios-instance';

import { App } from '../../models';

export class AppService {
  /**
   * Get the app platform information associated with the provided credentials
   **/

  /**
   * Create a new App
   *
   * ### Example
   * ```js
   * import { DigitalOcean } from 'digitalocean-js';
   *
   * const client = new DigitalOcean('your-api-key');
   * const request = {
   *   name: 'example.com',
   *   region: 'nyc3',
   *   size: 's-1vcpu-1gb',
   *   image: 'ubuntu-16-04-x64',
   *   ssh_keys: null,
   *   backups: false,
   *   ipv6: true,
   *   user_data: null,
   *   private_networking: null,
   *   volumes: null,
   *   tags: [
   *     'web'
   *   ]
   * };
   * const App = await client.Apps.createNewApp(request);
   * ```
   */
  public createNewApp(App: App): Promise<App> {
    return instance.post(`/apps`, App).then(response => response.data.App);
  }

  /**
   * Create multiple Apps with the same specs but different names
   *
   * ### Example
   * ```js
   * import { DigitalOcean } from 'digitalocean-js';
   *
   * const client = new DigitalOcean('your-api-key');
   * const request = {
   *   names: [
   *     'sub-01.example.com',
   *     'sub-02.example.com'
   *   ],
   *   region: 'nyc3',
   *   size: 's-1vcpu-1gb',
   *   image: 'ubuntu-16-04-x64',
   *   ssh_keys: null,
   *   backups: false,
   *   ipv6: true,
   *   user_data: null,
   *   private_networking: null,
   *   tags: [
   *     'web'
   *   ]
   * };
   * const Apps = await client.Apps.createMultipleApps(request);
   * ```
   */
  public createMultipleApps(AppsRequest: App): Promise<App[]> {
    return instance
      .post(`/apps`, AppsRequest)
      .then(response => response.data.Apps);
  }

  /**
   * Get a specific existing App by ID
   *
   * ### Example
   * ```js
   * import { DigitalOcean } from 'digitalocean-js';
   *
   * const client = new DigitalOcean('your-api-key');
   * const App = await client.Apps.getExistingApp('App-id');
   * ```
   */
  public getExistingApp(AppId: number): Promise<App> {
    return instance.get(`/apps/${AppId}`).then(response => response.data.App);
  }

  /**
   * Get all Apps on the account
   *
   * ### Example
   * ```js
   * import { DigitalOcean } from 'digitalocean-js';
   *
   * const client = new DigitalOcean('your-api-key');
   * const Apps = await client.Apps.getAllApps();
   * ```
   */
  public getAllApps(): Promise<App[]> {
    return instance.get(`/apps`).then(response => response.data.Apps);
  }

  /**
   * Get all Apps on the account that has a given tag
   *
   * ### Example
   * ```js
   * import { DigitalOcean } from 'digitalocean-js';
   *
   * const client = new DigitalOcean('your-api-key');
   * const Apps = await client.Apps.getAppsByTag('tag-name');
   * ```
   */
  public getAppsByTag(tag: string): Promise<App[]> {
    return instance
      .get(`/apps`, { params: { tag_name: tag } })
      .then(response => response.data.Apps);
  }

  /**
   * Delete a specific App by ID
   *
   * ### Example
   * ```js
   * import { DigitalOcean } from 'digitalocean-js';
   *
   * const client = new DigitalOcean('your-api-key');
   * await client.Apps.deleteApp('App-id');
   * ```
   */
  public deleteApp(AppId: number): Promise<void> {
    return instance.delete(`/apps/${AppId}`);
  }

  /**
   * Delete Apps by a tag
   *
   * ### Example
   * ```js
   * import { DigitalOcean } from 'digitalocean-js';
   *
   * const client = new DigitalOcean('your-api-key');
   * await client.Apps.deleteAppsByTag('tag');
   * ```
   */
  public deleteAppsByTag(tag: string): Promise<void> {
    return instance.delete(`/apps`, { params: { tag_name: tag } });
  }
}
