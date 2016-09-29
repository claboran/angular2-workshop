import {Book} from "./book";
/**
 * Created by cla on 9/29/16.
 */

export interface IBookDataService {
  getBooks(): Array<Book>;
}
