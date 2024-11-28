import { test, expect } from '@playwright/test';

test('converte uma imagem jpg para webp e verifica se e feito o download após a conversão', async ({ page }) => {
  // Navega até a URL da aplicação
  await page.goto('http://localhost:5173/');

  // Verifica os elementos iniciais da página
  await expect(page.locator('#imageConverterArea')).toBeVisible(); // Área do conversor
  await expect(page.locator('#imageInput')).toBeVisible(); // Área de upload
  await expect(page.getByRole('heading', { name: 'Arraste uma imagem aqui' })).toBeVisible(); // Título inicial
  await expect(page.locator('#imageInput')).toContainText('procure arquivos'); // Texto de instrução
  await expect(page.getByText('Selecione o formato desejado')).toBeVisible(); // Texto de instrução do formato
  await expect(page.getByRole('combobox')).toBeVisible(); // Combobox para seleção de formato
  await expect(page.getByRole('combobox')).toContainText('SelecioneWEBPPNGJPEG'); // Opções do combobox
  await expect(page.getByRole('button', { name: 'Converter Imagem' })).toBeVisible(); // Botão de conversão

  // Simula o upload de uma imagem JPG
  const filePath = 'tests/jpgImage.jpg';
  await page.locator('#defaultFileInput').setInputFiles(filePath);

  // Valida as informações do arquivo carregado
  const fileInfoArea = page.locator('.fileInfoArea');
  const fileName = page.locator('.fileName');
  const fileSize = page.locator('.fileSize');
  const removeFileButton = page.locator('.removeFileButton');

  await expect(fileInfoArea).toBeVisible(); // Área de informações
  await expect(fileName).toBeVisible(); // Nome do arquivo
  await expect(fileName).toContainText('jpgImage.jpg'); // Nome correto
  await expect(fileSize).toBeVisible(); // Tamanho do arquivo
  await expect(fileSize).toContainText('251.03 KB'); // Tamanho correto
  await expect(removeFileButton).toBeVisible(); // Botão de remoção visível

  // Verifica se o valor "JPEG" no combobox está desabilitado
  const jpegOption = page.locator('option[value="jpeg"]');
  await expect(jpegOption).toHaveAttribute('disabled', ''); // Verifica se o atributo 'disabled' está presente
  
  // Seleciona o formato de conversão para WEBP
  const formatSelect = page.getByRole('combobox');
  await formatSelect.selectOption('webp');
  await expect(formatSelect).toContainText('WEBP'); // Valida o formato selecionado

  // Inicia a conversão e verifica o comportamento de download
  const downloadPromise = page.waitForEvent('download'); // Espera o evento de download
  await page.getByRole('button', { name: 'Converter Imagem' }).click();
  const download = await downloadPromise;
});

test('converte uma imagem jpg para png e verifica se e feito o download após a conversão', async ({ page }) => {
  // Navega até a URL da aplicação
  await page.goto('http://localhost:5173/');

  // Verifica os elementos iniciais da página
  await expect(page.locator('#imageConverterArea')).toBeVisible(); // Área do conversor
  await expect(page.locator('#imageInput')).toBeVisible(); // Área de upload
  await expect(page.getByRole('heading', { name: 'Arraste uma imagem aqui' })).toBeVisible(); // Título inicial
  await expect(page.locator('#imageInput')).toContainText('procure arquivos'); // Texto de instrução
  await expect(page.getByText('Selecione o formato desejado')).toBeVisible(); // Texto de instrução do formato
  await expect(page.getByRole('combobox')).toBeVisible(); // Combobox para seleção de formato
  await expect(page.getByRole('combobox')).toContainText('SelecioneWEBPPNGJPEG'); // Opções do combobox
  await expect(page.getByRole('button', { name: 'Converter Imagem' })).toBeVisible(); // Botão de conversão

  // Simula o upload de uma imagem JPG
  const filePath = 'tests/jpgImage.jpg';
  await page.locator('#defaultFileInput').setInputFiles(filePath);

  // Valida as informações do arquivo carregado
  const fileInfoArea = page.locator('.fileInfoArea');
  const fileName = page.locator('.fileName');
  const fileSize = page.locator('.fileSize');
  const removeFileButton = page.locator('.removeFileButton');

  await expect(fileInfoArea).toBeVisible(); // Área de informações
  await expect(fileName).toBeVisible(); // Nome do arquivo
  await expect(fileName).toContainText('jpgImage.jpg'); // Nome correto
  await expect(fileSize).toBeVisible(); // Tamanho do arquivo
  await expect(fileSize).toContainText('251.03 KB'); // Tamanho correto
  await expect(removeFileButton).toBeVisible(); // Botão de remoção visível

  // Verifica se o valor "JPEG" no combobox está desabilitado
  const jpegOption = page.locator('option[value="jpeg"]');
  await expect(jpegOption).toHaveAttribute('disabled', ''); // Verifica se o atributo 'disabled' está presente
  
  // Seleciona o formato de conversão para PNG
  const formatSelect = page.getByRole('combobox');
  await formatSelect.selectOption('png');
  await expect(formatSelect).toContainText('PNG'); // Valida o formato selecionado

  // Inicia a conversão e verifica o comportamento de download
  const downloadPromise = page.waitForEvent('download'); // Espera o evento de download
  await page.getByRole('button', { name: 'Converter Imagem' }).click();
  const download = await downloadPromise;
});

test('converte uma imagem png para jpeg e verifica se e feito o download após a conversão', async ({ page }) => {
  // Navega até a URL da aplicação
  await page.goto('http://localhost:5173/');

  // Verifica os elementos iniciais da página
  await expect(page.locator('#imageConverterArea')).toBeVisible(); // Área do conversor
  await expect(page.locator('#imageInput')).toBeVisible(); // Área de upload
  await expect(page.getByRole('heading', { name: 'Arraste uma imagem aqui' })).toBeVisible(); // Título inicial
  await expect(page.locator('#imageInput')).toContainText('procure arquivos'); // Texto de instrução
  await expect(page.getByText('Selecione o formato desejado')).toBeVisible(); // Texto de instrução do formato
  await expect(page.getByRole('combobox')).toBeVisible(); // Combobox para seleção de formato
  await expect(page.getByRole('combobox')).toContainText('SelecioneWEBPPNGJPEG'); // Opções do combobox
  await expect(page.getByRole('button', { name: 'Converter Imagem' })).toBeVisible(); // Botão de conversão

  // Simula o upload de uma imagem PNG
  const filePath = 'tests/pngImage.png';
  await page.locator('#defaultFileInput').setInputFiles(filePath);

  // Valida as informações do arquivo carregado
  const fileInfoArea = page.locator('.fileInfoArea');
  const fileName = page.locator('.fileName');
  const fileSize = page.locator('.fileSize');
  const removeFileButton = page.locator('.removeFileButton');

  await expect(fileInfoArea).toBeVisible(); // Área de informações
  await expect(fileName).toBeVisible(); // Nome do arquivo
  await expect(fileName).toContainText('pngImage.png'); // Nome correto
  await expect(fileSize).toBeVisible(); // Tamanho do arquivo
  await expect(fileSize).toContainText('419.64 KB'); // Tamanho correto
  await expect(removeFileButton).toBeVisible(); // Botão de remoção visível

  // Verifica se o valor "PNG" no combobox está desabilitado
  const pngOption = page.locator('option[value="png"]');
  await expect(pngOption).toHaveAttribute('disabled', ''); // Verifica se o atributo 'disabled' está presente
  
  // Seleciona o formato de conversão para jpeg
  const formatSelect = page.getByRole('combobox');
  await formatSelect.selectOption('jpeg');
  await expect(formatSelect).toContainText('JPEG'); // Valida o formato selecionado

  // Inicia a conversão e verifica o comportamento de download
  const downloadPromise = page.waitForEvent('download'); // Espera o evento de download
  await page.getByRole('button', { name: 'Converter Imagem' }).click();
  const download = await downloadPromise;
});

test('converte uma imagem png para webp e verifica se e feito o download após a conversão', async ({ page }) => {
  // Navega até a URL da aplicação
  await page.goto('http://localhost:5173/');

  // Verifica os elementos iniciais da página
  await expect(page.locator('#imageConverterArea')).toBeVisible(); // Área do conversor
  await expect(page.locator('#imageInput')).toBeVisible(); // Área de upload
  await expect(page.getByRole('heading', { name: 'Arraste uma imagem aqui' })).toBeVisible(); // Título inicial
  await expect(page.locator('#imageInput')).toContainText('procure arquivos'); // Texto de instrução
  await expect(page.getByText('Selecione o formato desejado')).toBeVisible(); // Texto de instrução do formato
  await expect(page.getByRole('combobox')).toBeVisible(); // Combobox para seleção de formato
  await expect(page.getByRole('combobox')).toContainText('SelecioneWEBPPNGJPEG'); // Opções do combobox
  await expect(page.getByRole('button', { name: 'Converter Imagem' })).toBeVisible(); // Botão de conversão

  // Simula o upload de uma imagem PNG
  const filePath = 'tests/pngImage.png';
  await page.locator('#defaultFileInput').setInputFiles(filePath);

  // Valida as informações do arquivo carregado
  const fileInfoArea = page.locator('.fileInfoArea');
  const fileName = page.locator('.fileName');
  const fileSize = page.locator('.fileSize');
  const removeFileButton = page.locator('.removeFileButton');

  await expect(fileInfoArea).toBeVisible(); // Área de informações
  await expect(fileName).toBeVisible(); // Nome do arquivo
  await expect(fileName).toContainText('pngImage.png'); // Nome correto
  await expect(fileSize).toBeVisible(); // Tamanho do arquivo
  await expect(fileSize).toContainText('419.64 KB'); // Tamanho correto
  await expect(removeFileButton).toBeVisible(); // Botão de remoção visível

  // Verifica se o valor "PNG" no combobox está desabilitado
  const pngOption = page.locator('option[value="png"]');
  await expect(pngOption).toHaveAttribute('disabled', ''); // Verifica se o atributo 'disabled' está presente
  
  // Seleciona o formato de conversão para webp
  const formatSelect = page.getByRole('combobox');
  await formatSelect.selectOption('webp');
  await expect(formatSelect).toContainText('WEBP'); // Valida o formato selecionado

  // Inicia a conversão e verifica o comportamento de download
  const downloadPromise = page.waitForEvent('download'); // Espera o evento de download
  await page.getByRole('button', { name: 'Converter Imagem' }).click();
  const download = await downloadPromise;
});

test('converte uma imagem webp para jpeg e verifica se e feito o download após a conversão', async ({ page }) => {
  // Navega até a URL da aplicação
  await page.goto('http://localhost:5173/');

  // Verifica os elementos iniciais da página
  await expect(page.locator('#imageConverterArea')).toBeVisible(); // Área do conversor
  await expect(page.locator('#imageInput')).toBeVisible(); // Área de upload
  await expect(page.getByRole('heading', { name: 'Arraste uma imagem aqui' })).toBeVisible(); // Título inicial
  await expect(page.locator('#imageInput')).toContainText('procure arquivos'); // Texto de instrução
  await expect(page.getByText('Selecione o formato desejado')).toBeVisible(); // Texto de instrução do formato
  await expect(page.getByRole('combobox')).toBeVisible(); // Combobox para seleção de formato
  await expect(page.getByRole('combobox')).toContainText('SelecioneWEBPPNGJPEG'); // Opções do combobox
  await expect(page.getByRole('button', { name: 'Converter Imagem' })).toBeVisible(); // Botão de conversão

  // Simula o upload de uma imagem WEBP
  const filePath = 'tests/webpImage.webp';
  await page.locator('#defaultFileInput').setInputFiles(filePath);

  // Valida as informações do arquivo carregado
  const fileInfoArea = page.locator('.fileInfoArea');
  const fileName = page.locator('.fileName');
  const fileSize = page.locator('.fileSize');
  const removeFileButton = page.locator('.removeFileButton');

  await expect(fileInfoArea).toBeVisible(); // Área de informações
  await expect(fileName).toBeVisible(); // Nome do arquivo
  await expect(fileName).toContainText('webpImage.webp'); // Nome correto
  await expect(fileSize).toBeVisible(); // Tamanho do arquivo
  await expect(fileSize).toContainText('80.76 KB'); // Tamanho correto
  await expect(removeFileButton).toBeVisible(); // Botão de remoção visível

  // Verifica se o valor "WEBP" no combobox está desabilitado
  const webpOption = page.locator('option[value="webp"]');
  await expect(webpOption).toHaveAttribute('disabled', ''); // Verifica se o atributo 'disabled' está presente
  
  // Seleciona o formato de conversão para webp
  const formatSelect = page.getByRole('combobox');
  await formatSelect.selectOption('jpeg');
  await expect(formatSelect).toContainText('JPEG'); // Valida o formato selecionado

  // Inicia a conversão e verifica o comportamento de download
  const downloadPromise = page.waitForEvent('download'); // Espera o evento de download
  await page.getByRole('button', { name: 'Converter Imagem' }).click();
  const download = await downloadPromise;
});

test('converte uma imagem webp para png e verifica se e feito o download após a conversão', async ({ page }) => {
  // Navega até a URL da aplicação
  await page.goto('http://localhost:5173/');

  // Verifica os elementos iniciais da página
  await expect(page.locator('#imageConverterArea')).toBeVisible(); // Área do conversor
  await expect(page.locator('#imageInput')).toBeVisible(); // Área de upload
  await expect(page.getByRole('heading', { name: 'Arraste uma imagem aqui' })).toBeVisible(); // Título inicial
  await expect(page.locator('#imageInput')).toContainText('procure arquivos'); // Texto de instrução
  await expect(page.getByText('Selecione o formato desejado')).toBeVisible(); // Texto de instrução do formato
  await expect(page.getByRole('combobox')).toBeVisible(); // Combobox para seleção de formato
  await expect(page.getByRole('combobox')).toContainText('SelecioneWEBPPNGJPEG'); // Opções do combobox
  await expect(page.getByRole('button', { name: 'Converter Imagem' })).toBeVisible(); // Botão de conversão

  // Simula o upload de uma imagem WEBP
  const filePath = 'tests/webpImage.webp';
  await page.locator('#defaultFileInput').setInputFiles(filePath);

  // Valida as informações do arquivo carregado
  const fileInfoArea = page.locator('.fileInfoArea');
  const fileName = page.locator('.fileName');
  const fileSize = page.locator('.fileSize');
  const removeFileButton = page.locator('.removeFileButton');

  await expect(fileInfoArea).toBeVisible(); // Área de informações
  await expect(fileName).toBeVisible(); // Nome do arquivo
  await expect(fileName).toContainText('webpImage.webp'); // Nome correto
  await expect(fileSize).toBeVisible(); // Tamanho do arquivo
  await expect(fileSize).toContainText('80.76 KB'); // Tamanho correto
  await expect(removeFileButton).toBeVisible(); // Botão de remoção visível

  // Verifica se o valor "WEBP" no combobox está desabilitado
  const webpOption = page.locator('option[value="webp"]');
  await expect(webpOption).toHaveAttribute('disabled', ''); // Verifica se o atributo 'disabled' está presente
  
  // Seleciona o formato de conversão para webp
  const formatSelect = page.getByRole('combobox');
  await formatSelect.selectOption('png');
  await expect(formatSelect).toContainText('PNG'); // Valida o formato selecionado

  // Inicia a conversão e verifica o comportamento de download
  const downloadPromise = page.waitForEvent('download'); // Espera o evento de download
  await page.getByRole('button', { name: 'Converter Imagem' }).click();
  const download = await downloadPromise;
});

