# Configuración de la línea de órdenes

Para la configuración de la línea de órdenes, se ha optado por instalar zsh y el framework oh-my-zsh para emplear el theme p10k

## Instalación de zsh

Primero ejecutamos la orden siguiente:

```bash
sudo apt install zsh
```

Para comprobar que se ha instalado correctamente verificamos la versión:

```bash
zsh --version
```

En mi caso se trata de la versión 5.8

A continuación configuramos zsh como el intérprete por defecto

```bash
chsh -s $(which zsh)
```

## Instalación de oh-my-zsh

```bash
sh -c "$(curl -fsSL https://raw.github.com/ohmyzsh/ohmyzsh/master/tools/install.sh)"
```

Contamos con varios themes por defecto que podemos ver en:

```bash
ls /home/tecmint/.oh-my-zsh/themes/
```

Antes de elegir el tema se han incorporado 2 plugins bastante útiles:

```bash
git clone https://github.com/zsh-users/zsh-autosuggestions.git $ZSH_CUSTOM/plugins/zsh-autosuggestions
```

```bash
git clone https://github.com/zsh-users/zsh-syntax-highlighting.git $ZSH_CUSTOM/plugins/zsh-syntax-highlighting
```

Para que tengan efecto hemos modificado el archivo ~/.zshrc

Dentro de este modificamos la línea siguiente:

`plugins=(git)`

Por esta:

`plugins=(git zsh-autosuggestions zsh-syntax-highlighting)`

Una vez hemos comprobado que los plugins funcionan, procedemos a instalar el theme.

## Instalación del tema

A raíz de consultar comparativas entre los diferentes themes se ha optado por instalar powerlevel10k, que no viene incluído.

```bash
git clone --depth=1 https://github.com/romkatv/powerlevel10k.git ${ZSH_CUSTOM:-$HOME/.oh-my-zsh/custom}/themes/powerlevel10k
```

Entramos de nuevo en ~/.zshrc y cambiamos:

`ZSH_THEME="..."`

Por:

`ZSH_THEME="powerlevel10k/powerlevel10k"`

A continuación instalamos los archivos de fuente recomendados (MesloLGS) y creamos un nuevo perfil en la terminal.

Seleccionamos como texto la tipografía personalizada "MesloLGS NF Regular"

En cuanto a la paleta de colores, optamos por el *preset* "Tango oscuro" y cambiamos el color de fondo por **#171A1B**

Finalmente configuramos el tema:

```bash
p10k configure
```

La configuración por la que he optado es la siguiente:

* Prompt Style: (1) Lean
* Character Set: (1) Unicode
* Prompt Colors: (1) 256 Colors
* Show Current Time?: (1) No
* Prompt Height: (2) Two Lines
* Prompt Connection: (1) Disconnected
* Prompt Frame: (1) No frame
* Prompt Spacing: (1) Compact
* Icons: (1) Few Icons
* Prompt Flow: (2) Fluent
* Enable Transient Prompt?: (n) No
* Instant Prompt Mode: (1) Verbose (recommended)
* Overwrite ~/.p10k.zsh?: (y) yes

