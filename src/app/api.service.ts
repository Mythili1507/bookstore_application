

export class ApiSerivce {

  public baseURL = 'https://mg5build.sisystems.com/fwgateway/v1';
  public contactURL = this.baseURL + '/contact';
  public customerURL = this.baseURL + '/customer';
  public loginURL = this.baseURL + '/Auth/GetToken';

  public bearerLoginToken: string = '';

}