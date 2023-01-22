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
    return instance.post(`/Apps`, App).then(response => response.data.App);
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
      .post(`/Apps`, AppsRequest)
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
    return instance.get(`/Apps`).then(response => response.data.Apps);
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
      .get(`/Apps`, { params: { tag_name: tag } })
      .then(response => response.data.Apps);
  }

  /**
   * Retrieve a list of all kernels available to a App
   *
   * ### Example
   * ```js
   * import { DigitalOcean } from 'digitalocean-js';
   *
   * const client = new DigitalOcean('your-api-key');
   * const kernels = await client.Apps.getAvailableKernelsForApp('App-id');
   * ```
   */
  public getAvailableKernelsForApp(AppId: number): Promise<Kernel[]> {
    return instance
      .get(`/Apps/${AppId}/kernels`)
      .then(response => response.data.kernels);
  }

  /**
   * Retrieve the snapshots that have been created from a App
   *
   * ### Example
   * ```js
   * import { DigitalOcean } from 'digitalocean-js';
   *
   * const client = new DigitalOcean('your-api-key');
   * const snapshots = await client.Apps.getSnapshotsForApp('App-id');
   * ```
   */
  public getSnapshotsForApp(AppId: number): Promise<Snapshot[]> {
    return instance
      .get(`/Apps/${AppId}/snapshots`)
      .then(response => response.data.snapshots);
  }

  /**
   * Retrieve any backups associated with a App
   *
   * ### Example
   * ```js
   * import { DigitalOcean } from 'digitalocean-js';
   *
   * const client = new DigitalOcean('your-api-key');
   * const backups = await client.Apps.getBackupsForApp('App-id');
   * ```
   */
  public getBackupsForApp(AppId: number): Promise<Backup[]> {
    return instance
      .get(`/Apps/${AppId}/backups`)
      .then(response => response.data.backups);
  }

  /**
   * Retrieve all actions that have been executed on a App
   *
   * ### Example
   * ```js
   * import { DigitalOcean } from 'digitalocean-js';
   *
   * const client = new DigitalOcean('your-api-key');
   * const actions = await client.Apps.getAppActions('App-id');
   * ```
   */
  public getAppActions(AppId: number): Promise<Action[]> {
    return instance
      .get(`/Apps/${AppId}/actions`)
      .then(response => response.data.actions);
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
    return instance.delete(`/Apps/${AppId}`);
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
    return instance.delete(`/Apps`, { params: { tag_name: tag } });
  }

  /**
   * Retrieve a list of Apps that are running on the same physical server
   *
   * ### Example
   * ```js
   * import { DigitalOcean } from 'digitalocean-js';
   *
   * const client = new DigitalOcean('your-api-key');
   * const Apps = await client.Apps.getNeighborsForApp('App-id');
   * ```
   */
  public getNeighborsForApp(AppId: number): Promise<App[]> {
    return instance
      .delete(`/Apps/${AppId}/neighbors`)
      .then(response => response.data.Apps);
  }

  /**
   * Retrieve a list of any Apps that are running on the same physical hardware
   *
   * ### Example
   * ```js
   * import { DigitalOcean } from 'digitalocean-js';
   *
   * const client = new DigitalOcean('your-api-key');
   * const Apps = await client.Apps.getAppNeighbors();
   * ```
   */
  public getAppNeighbors(): Promise<App[][]> {
    return instance
      .delete(`/reports/App_neighbors`)
      .then(response => response.data.neighbors);
  }
}
