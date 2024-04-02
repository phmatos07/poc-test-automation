import HomePage from '../pageobjects/home.page.js';
import StackTracesPage from '../pageobjects/stack-traces.page.js';

describe('Teste Automatizado', () => {
  it('Teste end-to-end referente a página Home.', async () => {
    await HomePage.start();
  });

  it('Teste end-to-end referente a página Stack-traces.', async () => {
    await StackTracesPage.start();
  });

  it('Título referente a pagína Stack Traces deve conter texto.', async () => {
    const title = await StackTracesPage.titlePageStackTraces.getText();
    // OU
    // const title = await $('#lab-angular-ngx-title_page_stack_traces-read').getText();
    expect(title).toEqual('Rastreamentos de pilha melhorado (Stack Traces)');
    await StackTracesPage.navigateToHome();
  });
});
