let x = null;

switch (typeof x) {
    case 'number':
        console.log('x-число');
        break;
    case 'string':
        console.log('x-строка');
        break;
    case 'boolean':
        console.log('x-логистический');
        break;
    default:
        console.log('тип Х не определён');
} 