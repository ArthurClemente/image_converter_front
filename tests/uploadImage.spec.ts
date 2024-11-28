import { test, expect } from '@playwright/test';

test('carrega uma imagem JPG/JPEG e valida o comportamento da página', async ({ page }) => {
  // Navega até a URL da aplicação
  await page.goto('http://localhost:5173/');

  // Verifica se a área principal do conversor está visível
  const converterArea = page.locator('#imageConverterArea');
  await expect(converterArea).toBeVisible();

  // Verifica se a área de entrada de imagem está visível
  const imageInput = page.locator('#imageInput');
  await expect(imageInput).toBeVisible();

  // Verifica se o texto "Arraste uma imagem aqui" está visível
  await expect(page.getByRole('heading', { name: 'Arraste uma imagem aqui' })).toBeVisible();

  // Verifica se o texto "procure arquivos" está presente e visível
  await expect(imageInput).toContainText('procure arquivos');
  await expect(page.getByText('procure arquivos')).toBeVisible();

  // Verifica se o texto "Selecione o formato desejado" está presente
  await expect(imageInput).toContainText('Selecione o formato desejado');

  // Verifica se o combobox de seleção de formato está visível e contém os formatos esperados
  const formatSelect = page.getByRole('combobox');
  await expect(formatSelect).toBeVisible();
  await expect(formatSelect).toContainText('SelecioneWEBPPNGJPEG');

  // Verifica se o botão de conversão está visível
  await expect(page.getByRole('button', { name: 'Converter Imagem' })).toBeVisible();

  // Simula o clique no texto "procure arquivos" para carregar um arquivo
  await page.getByText('procure arquivos').click();

  // Carrega o arquivo de imagem JPEG no input
  const filePath = 'tests/jpgImage.jpg';
  await page.locator('#defaultFileInput').setInputFiles(filePath);

  // Verifica se a mensagem de sucesso aparece após o upload do arquivo
  await expect(page.getByRole('heading', { name: 'Arquivo carregado com sucesso' })).toBeVisible();


  // Valida se o nome do arquivo carregado é exibido corretamente com seu tamanho
  await expect(page.locator('.fileInfoArea')).toBeVisible();
  await expect(page.locator('.fileInfo')).toBeVisible();
  await expect(page.locator('.fileIcon')).toBeVisible();

  await expect(page.locator('.fileName')).toBeVisible();
  await expect(page.locator('.fileName')).toContainText('jpgImage.jpg');

  await expect(page.locator('.fileSize')).toBeVisible();
  await expect(page.locator('.fileSize')).toContainText('251.03 KB');

  await expect(page.locator('.removeFileButton')).toBeVisible();
});

test('carrega uma imagem PNG e valida o comportamento da página', async ({ page }) => {
  // Navega até a URL da aplicação
  await page.goto('http://localhost:5173/');

  // Verifica se a área principal do conversor está visível
  const converterArea = page.locator('#imageConverterArea');
  await expect(converterArea).toBeVisible();

  // Verifica se a área de entrada de imagem está visível
  const imageInput = page.locator('#imageInput');
  await expect(imageInput).toBeVisible();

  // Verifica se o texto "Arraste uma imagem aqui" está visível
  await expect(page.getByRole('heading', { name: 'Arraste uma imagem aqui' })).toBeVisible();

  // Verifica se o texto "procure arquivos" está presente e visível
  await expect(imageInput).toContainText('procure arquivos');
  await expect(page.getByText('procure arquivos')).toBeVisible();

  // Verifica se o texto "Selecione o formato desejado" está presente
  await expect(imageInput).toContainText('Selecione o formato desejado');

  // Verifica se o combobox de seleção de formato está visível e contém os formatos esperados
  const formatSelect = page.getByRole('combobox');
  await expect(formatSelect).toBeVisible();
  await expect(formatSelect).toContainText('SelecioneWEBPPNGJPEG');

  // Verifica se o botão de conversão está visível
  await expect(page.getByRole('button', { name: 'Converter Imagem' })).toBeVisible();

  // Simula o clique no texto "procure arquivos" para carregar um arquivo
  await page.getByText('procure arquivos').click();

  // Carrega o arquivo de imagem PNG no input
  const filePath = 'tests/pngImage.png';
  await page.locator('#defaultFileInput').setInputFiles(filePath);

  // Verifica se a mensagem de sucesso aparece após o upload do arquivo
  await expect(page.getByRole('heading', { name: 'Arquivo carregado com sucesso' })).toBeVisible();

  // Valida se o nome do arquivo carregado é exibido corretamente com seu tamanho
  await expect(page.locator('.fileInfoArea')).toBeVisible();
  await expect(page.locator('.fileInfo')).toBeVisible();
  await expect(page.locator('.fileIcon')).toBeVisible();

  await expect(page.locator('.fileName')).toBeVisible();
  await expect(page.locator('.fileName')).toContainText('pngImage.png');

  await expect(page.locator('.fileSize')).toBeVisible();
  await expect(page.locator('.fileSize')).toContainText('419.64 KB');

  await expect(page.locator('.removeFileButton')).toBeVisible();
});

test('carrega uma imagem WEBP e valida o comportamento da página', async ({ page }) => {
  // Navega até a URL da aplicação
  await page.goto('http://localhost:5173/');

  // Verifica se a área principal do conversor está visível
  const converterArea = page.locator('#imageConverterArea');
  await expect(converterArea).toBeVisible();

  // Verifica se a área de entrada de imagem está visível
  const imageInput = page.locator('#imageInput');
  await expect(imageInput).toBeVisible();

  // Verifica se o texto "Arraste uma imagem aqui" está visível
  await expect(page.getByRole('heading', { name: 'Arraste uma imagem aqui' })).toBeVisible();

  // Verifica se o texto "procure arquivos" está presente e visível
  await expect(imageInput).toContainText('procure arquivos');
  await expect(page.getByText('procure arquivos')).toBeVisible();

  // Verifica se o texto "Selecione o formato desejado" está presente
  await expect(imageInput).toContainText('Selecione o formato desejado');

  // Verifica se o combobox de seleção de formato está visível e contém os formatos esperados
  const formatSelect = page.getByRole('combobox');
  await expect(formatSelect).toBeVisible();
  await expect(formatSelect).toContainText('SelecioneWEBPPNGJPEG');

  // Verifica se o botão de conversão está visível
  await expect(page.getByRole('button', { name: 'Converter Imagem' })).toBeVisible();

  // Simula o clique no texto "procure arquivos" para carregar um arquivo
  await page.getByText('procure arquivos').click();

  // Carrega o arquivo de imagem WEBP no input
  const filePath = 'tests/webpImage.webp';
  await page.locator('#defaultFileInput').setInputFiles(filePath);

  // Verifica se a mensagem de sucesso aparece após o upload do arquivo
  await expect(page.getByRole('heading', { name: 'Arquivo carregado com sucesso' })).toBeVisible();

  // Valida se o nome do arquivo carregado é exibido corretamente com seu tamanho
  await expect(page.locator('.fileInfoArea')).toBeVisible();
  await expect(page.locator('.fileInfo')).toBeVisible();
  await expect(page.locator('.fileIcon')).toBeVisible();

  await expect(page.locator('.fileName')).toBeVisible();
  await expect(page.locator('.fileName')).toContainText('webpImage.webp');

  await expect(page.locator('.fileSize')).toBeVisible();
  await expect(page.locator('.fileSize')).toContainText('80.76 KB');

  await expect(page.locator('.removeFileButton')).toBeVisible();
});

test('carrega uma imagem de formato inválido valida o comportamento da página', async ({ page }) => {
  await page.goto('http://localhost:5173/');
  await expect(page.locator('#imageConverterArea')).toBeVisible();
  await expect(page.locator('#imageInput')).toBeVisible();
  await expect(page.getByRole('heading', { name: 'Arraste uma imagem aqui' })).toBeVisible();
  await expect(page.getByText('procure arquivos')).toBeVisible();
  await expect(page.locator('#imageInput')).toContainText('procure arquivos');
  await expect(page.getByText('Selecione o formato desejado')).toBeVisible();
  await expect(page.getByRole('combobox')).toBeVisible();
  await expect(page.getByRole('combobox')).toContainText('SelecioneWEBPPNGJPEG');
  await expect(page.getByRole('button', { name: 'Converter Imagem' })).toBeVisible();
  await page.getByText('procure arquivos').click();

  const filePath = 'tests/gifImage.gif';
  await page.locator('#defaultFileInput').setInputFiles(filePath);

  await expect(page.locator('.uploadErrorText')).toBeVisible();
  await expect(page.locator('.uploadErrorText')).toContainText('Por favor selecione uma imagem válida: PNG, JPEG, JPG ou WEBP.');

});