import { Selector } from 'testcafe';

const testUrl: string = process.env.APP_URL || 'http://localhost:3000/';

fixture('Getting Started')
    .page(testUrl);

test('correct title', async t => {
    await t
        .expect(Selector('h1').textContent).eql('TODO all the things !');
});

test('create a todo', async t => {
    const todoText = 'test todo';
    await t.typeText('input', todoText)
       .click('button')
       .expect(Selector('li:last-child').textContent).contains(todoText)
       .expect(Selector('li:last-child').classNames).notContains('done');
});

test('mark it done', async t => {
    const todoText = 'done todo';
    await t.typeText('input', todoText)
        .click('button')
        .expect(Selector('li:last-child').textContent).contains(todoText)
        .click('li:last-child')
        .expect(Selector('li:last-child').classNames).contains('done');
});