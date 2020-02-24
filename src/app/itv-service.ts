import {ITvDataforUI} from './itv-datafor-ui'
import { Observable } from 'rxjs'
export interface ITvService {

  getTVData(showname: string): Observable<ITvDataforUI[]>

}
