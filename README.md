# React + Vite + MUI + JSON-SERVER PROJECT

## Для работы с Material-UI устанавливаем следующие зависимости:

#### Пример с NPM-manager:

- npm install @mui/material @emotion/react @emotion/styled
- npm install @mui/icons-material @mui/lab
- npm install @mui/x-date-pickers dayjs

## Пример зависимостей файла **package.json**:

```javascript

"dependencies": {
    "@emotion/react": "^11.13.0",
    "@emotion/styled": "^11.13.0",
    "@mui/icons-material": "^5.16.7",
    "@mui/lab": "^5.0.0-alpha.173",
    "@mui/material": "^5.16.7",
    ...
    "axios": "^1.7.4",
}
```

### Примеры базового использования библиотек MATERIAL UI и BASE UI:

```javascript
import { Box, TextField, Stack, Chip } from "@mui/material";

// Компонент TextField (комплексный компонент для стилизованного input) принимает как InputElementAttributes, так и HTMLAttributes:

{
  list.map(({ id, ...props }, i) => (
    <TextField
      sx={{
        color: "teal",
        m: "0.5rem",
        background: i + 1 === list.length ? "brown" : "none",
        "&:disabled": { opacity: 0.5 },
      }}
      key={id}
      autoFocus={!i && true}
      color={"primary"}
      fullWidth
      size="medium"
      value={state[props.name]}
      {...props}
      onChange={changeStateHandler}
      disabled={isDisabled && props.type === "submit"}
    />
  ));
}
```

### API компонентов MUI:

В разделе **API** описаны основные свойства(props) каждого MUI-компонента с <u>указанием типизации</u>
Например, для Input пропсы описаны по ссылке:

- [Input](https://mui.com/material-ui/api/input/) <br/>
  Конечно, помимо MUI-свойств, для Input доступны все основные HTMLAttributes:
- className;
- title;
- style;
- autoFocus;
- id и т.д.

### Кастомизация элементов:

1. По аналогии с inline-стилями в MUI у всех компонентов есть специальный пропс **sx**, принимающий в качеcтве значения js-объект в формате **СSS-STYLE-DECLARATION**:

```javascript
// **Импорты всех компонентов не показаны!**
// объект формата СSS-STYLE-DECLARATION
const SX_STACK_AVATAR = {
  fontSize: "1.15em",
  alignItems: "center",
  width: "auto",
  textTransform: "uppercase",
};

export const AvatarComp = () => {
  const login = useSelector((s) => s.authSliceReducer.login);

  return (
    <Stack component="section" direction="row" spacing={2} sx={SX_STACK_AVATAR}>
      <Avatar sx={{}} variant="rounded">
        <PersonIcon fontSize="large" color={"success"} />
      </Avatar>
      <Box>{login}</Box>
    </Stack>
  );
};
```

Подробное API свойства **sx**, со всеми сокращениями и псевдо-селекторами смотрите
по [ссылке](https://mui.com/system/getting-started/the-sx-prop/) sx-prop API

2. Наследуемся (по аналогии с библиотекой Styled-Components) и создаем кастомный компонент на базе MUI-компонета:

```javascript
// **Импорты всех компонентов не показаны!**
import { styled } from "@mui/material";
import { Link } from "react-router-dom";

const MyIconButton = styled(IconButton)(() => ({
  display: { xs: "none", md: "flex" },
  alignItems: "center",
  justifyContent: "center",
  fontFamily: "inherit",
  fontWeight: 700,
  letterSpacing: ".3rem",
  color: "inherit",
  textDecoration: "none",
  width: "auto",
}));

export const Logo = () => {
  return (
    <MyIconButton component={Link} to={PATHS.home}>
      <LogoDevIcon fontSize="large" color={"error"} sx={{ m: "auto" }} />
    </MyIconButton>
  );
};
```

3. Добавляем prop className и кастомизируем классически, с помощью СSS / SASS / TAILWIND:

```javascript
// **Импорты всех компонентов не показаны!**
// static
import AUTH from "../../assets/img/auth.jpg";
// В Home.sass описаны стили для <Paper></Paper> с классом .home__paper
import "./Home.sass";

export const Home = () => {
  return (
    <>
      <Title title={"Мое тестовое задание..."} />
      <Paper component="section" elevation={2} className="home__paper">
        <MyCardMedia
          component="img"
          src={AUTH}
          alt="auth.jpg"
          loading="lazy"
        ></MyCardMedia>
      </Paper>
    </>
  );
};
```

Ниже приведен файл Sass-препроцессора:

```css

.home__paper
    padding: '1rem'
    height: 100%
    &:hover
        background-color: pink

```

### Свойство **component** для комплексных компонентов типа **Typography**, **Box** и т.п.:

- Некоторые компоненты являются блочными обертками и по итогу компилируется в различные DOM-элементы. Пользователь сам определяет итоговый элемент за счет пропа **component**:

```javascript
// components:
import { Outlet } from "react-router-dom";
import { Container } from "@mui/material";
// css
import "./Layout.sass";

//  По итогу MUI-элемент Container превратится в DOM-tree в <main></main>:
export const Layout = () => {
  return (
    <>
      <Container maxWidth={"lg"} component={"main"}>
        <Outlet />
      </Container>
    </>
  );
};

//  По итогу MUI-элемент Typography превратится в DOM-tree в <h1></h1> c размером шрифта h4:
import { Typography } from "@mui/material";

const TitleProps = {
  component: "h1",
  align: "center",
  variant: "h4",
  fontFamily: "Montserrat",
  fontWeight: 400,
  margin: "1rem 0px",
  textTransform: "uppercase",
};

export const Title = ({ title }) => {
  return (
    <>
      <Typography {...TitleProps}> {title}</Typography>
    </>
  );
};
```

### Предустановленная цветовая MUI-палитра доступна благодаря объекту colors:

- Перейти в палитру: [colors](https://mui.com/material-ui/customization/color/) 

```javascript
// ИМПОРТИРУЕМ объект ЦВЕТОВОЙ ПАЛИТРЫ:
import { colors } from "@mui/material";
// components
import { Box } from "@mui/material";
import PulseLoader from "react-spinners/PulseLoader";

const SPINNER_PROPS = {
  color: colors.pink[300],
  size: 40,
  "aria-label": "Loading Spinner",
  cssOverride: {
    position: "absolute",
    top: "20%",
    left: "50%",
    transform: "translateX(-50%)",
  },
};

export const Spinner = ({ loading }) => {
  return (
    <Box component="section">
      <PulseLoader loading={loading} {...SPINNER_PROPS} />
    </Box>
  );
};
```

### Работаем с Иконками. MUI предлагает список из _2 100_ официальных иконок!

- Посмотреть иконки: [icons](https://mui.com/material-ui/material-icons/) 
- Посмотреть пропсы иконок: [icons-props](https://mui.com/material-ui/api/icon/) 

```javascript
// ПРИМЕР 1
import Button from '@mui/material/Button';
import DeleteIcon from '@mui/icons-material/Delete';
import SendIcon from '@mui/icons-material/Send';
import Stack from '@mui/material/Stack';

export default function IconLabelButtons() {
  return (
    <Stack direction="row" spacing={2}>
      <Button variant="outlined" startIcon={<DeleteIcon />}>
        Delete
      </Button>
      <Button variant="contained" endIcon={<SendIcon />}>
        Send
      </Button>
    </Stack>
  );
}

// ПРИМЕР 2
import Stack from '@mui/material/Stack';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';

export default function IconButtonSizes() {
  return (
    <Stack direction="row" alignItems="center" spacing={1}>
      <IconButton aria-label="delete" size="small">
        <DeleteIcon fontSize="inherit" />
      </IconButton>
      <IconButton aria-label="delete" size="small">
        <DeleteIcon fontSize="small" />
      </IconButton>
    </Stack>
  );
}

// ПРИМЕР 3
import LoadingButton from '@mui/lab/LoadingButton';
import SaveIcon from '@mui/icons-material/Save';
import Stack from '@mui/material/Stack';

export default function LoadingButtons() {
  return (
    <Stack direction="row" spacing={2}>
      <LoadingButton loading variant="outlined">
        Submit
      </LoadingButton>
      <LoadingButton loading loadingIndicator="Loading…" variant="outlined">
        Fetch data
      </LoadingButton>
      <LoadingButton
        loading
        loadingPosition="start"
        startIcon={<SaveIcon />}
        variant="outlined"
      >
        Save
      </LoadingButton>
    </Stack>
  );
}

```
