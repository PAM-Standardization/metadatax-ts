export class APIService {
  static API_FETCH_INIT = {
    method: 'GET',
    headers: {
      'Accept': 'application/json',
    }
  }

  protected static _getMetadataxURL(): string {
    return process.env['REACT_APP_METADATAX_URL'] ?? '/api';
  }
  protected static _get<T>(url: string): Promise<T> {
    return fetch(url, this.API_FETCH_INIT)
      .then(r => r.json());
  }
}