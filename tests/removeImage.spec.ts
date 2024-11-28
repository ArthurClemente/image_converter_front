import { test, expect } from '@playwright/test';

test('remove uma imagem carregada', async ({ page }) => {
  // Navega até a URL da aplicação
  await page.goto('http://localhost:5173/');

  // Carrega o arquivo de imagem PNG no input
  const filePath = 'tests/pngImage.png';
  await page.locator('#defaultFileInput').setInputFiles(filePath);

  // Verifica que os elementos principais da área do conversor estão visíveis
  await expect(page.locator('#imageConverterArea')).toBeVisible();
  await expect(page.locator('#imageInput')).toBeVisible(); 

  // Confirma que a mensagem de sucesso aparece após o upload
  await expect(page.getByRole('heading', { name: 'Arquivo carregado com sucesso' })).toBeVisible();

  // Valida a exibição das informações do arquivo carregado
  const fileInfoArea = page.locator('.fileInfoArea');
  await expect(fileInfoArea).toBeVisible(); 

  // Valida que os detalhes do arquivo estão visíveis e corretos
  const fileName = page.locator('.fileName');
  const fileSize = page.locator('.fileSize');
  await expect(fileName).toBeVisible();
  await expect(fileName).toContainText('pngImage.png'); 
  await expect(fileSize).toBeVisible();
  await expect(fileSize).toContainText('419.64 KB'); 

  // Verifica que o botão de remoção do arquivo está visível
  const removeButton = page.locator('.removeFileButton');
  await expect(removeButton).toBeVisible();

  // Clica no botão de remover arquivo
  await removeButton.click();

  // Valida que as informações do arquivo foram removidas da tela
  await expect(fileInfoArea).not.toBeVisible();
});