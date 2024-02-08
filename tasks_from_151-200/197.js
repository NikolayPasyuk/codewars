const replaceAll = (seq, find, replace) =>
  typeof seq === 'string' ? seq.split(find).join(replace) : seq.map(item => item === find ? replace : item);
