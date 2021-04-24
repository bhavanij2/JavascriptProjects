import { Observable } from 'rxjs';
import { createSubscriber } from './lib/util';
import fs from 'fs';

// fs.readdir('./src-server', (err, files) => {
//     if(err) 
//         console.error(err);
//     else
//         console.log(files);        
// });

const readDir$ = Observable.bindNodeCallback(fs.readdir);

readDir$('./src-server')
.mergeMap(files => Observable.from(files))
.map(file => `MANIPUATED:: ${file}`)
.subscribe(createSubscriber('node.readdir'));