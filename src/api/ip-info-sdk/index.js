import http from './http';
import Response from '../Response';
import { RequestError } from '../RequestError';

import GetBasicInfo from './requests/GetBasicInfo';

const DEPENDENCIES = { http, Response, RequestError };

const IpInfoSdk = {
  basicInfo: GetBasicInfo(DEPENDENCIES),
};

export default IpInfoSdk;
