import { setDefaultTimeout } from '@cucumber/cucumber';
//  the tests run asynchronously, we sometimes end up in situations where a step hasn't had time to execute before moving onto the next
setDefaultTimeout(60 * 1000);
