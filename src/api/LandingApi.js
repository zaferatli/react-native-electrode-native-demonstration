import {electrodeBridge} from 'react-native-electrode-bridge';
import LandingApiRequests from './LandingApiRequests';

const REQUESTS = new LandingApiRequests(electrodeBridge);

export function requests() {
  return REQUESTS;
}

export default {requests};
