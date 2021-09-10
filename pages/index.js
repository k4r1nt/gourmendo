import React from 'react';
import getConfig from 'next/config';
import Head from 'next/head';
import Link from 'next/link';
import { CustomButton } from '/components/uiParts/CustomButton';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import CustomAppBar from '/components/uiParts/CustomAppBar';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import { makeStyles, useTheme, withStyles } from '@material-ui/core/styles';
import Image from 'next/image';
import { Autocomplete } from '@material-ui/lab';
import Button from '@material-ui/core/Button';
import ButtonBase from '@material-ui/core/ButtonBase';
import CallIcon from '@material-ui/icons/Call';
import AccessTimeIcon from '@material-ui/icons/AccessTime';
import HomeIcon from '@material-ui/icons/Home';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';

const fetchApi = async (area, budget, genre) => {
  const query = new URLSearchParams();
  const { publicRuntimeConfig } = getConfig();
  const { VERCEL_URL } = publicRuntimeConfig;
  const areaCode = ['&small_area=X119', '&middle_area=Y964'];
  const budgetList = ['&budget=B010,B011', '&budget=B001,B002', '&budget=B003,B008', ''];
  const genreList = [
    '',
    '&genre=G001',
    '&genre=G002',
    '&genre=G003',
    '&genre=G004',
    '&genre=G005',
    '&genre=G006',
    '&genre=G007',
    '&genre=G008',
    '&genre=G009',
    '&genre=G010',
    '&genre=G011',
    '&genre=G012',
    '&genre=G013',
    '&genre=G014',
    '&genre=G015',
    '&genre=G016',
    '&genre=G017',
  ];
  query.set('area', areaCode[area]);
  query.append('budget', budgetList[budget]);
  query.append('genre', genreList[genre]);

  const apiUri = `${VERCEL_URL}/api/getJson?${query.toString()}`;
  const res = await fetch(apiUri);
  const data = await res.json();
  if (!res.ok) {
    const message = data?.message ?? result;
    throw new Error(message);
  }

  return data;
};

const Index = ({ gourmet }) => {
  const classes = useStyles();
  const [area, setArea] = React.useState(0);
  const [budget, setBudget] = React.useState();
  const [genre, setGenre] = React.useState(0);
  const [value, setValue] = React.useState(gourmet ?? '');
  const setLow = async () => {
    const select = 0;
    setBudget(select);
    console.log(budget);
    const res = await fetchApi(area, select, genre);
    console.log(res);
    setValue(res);
  };
  const setMiddle = async () => {
    const select = 1;
    setBudget(select);
    console.log(budget);
    const res = await fetchApi(area, select, genre);
    console.log(res);
    setValue(res);
  };
  const setHigh = async () => {
    const select = 2;
    setBudget(select);
    console.log(budget);
    const res = await fetchApi(area, select, genre);
    console.log(res);
    setValue(res);
  };
  const setAll = async () => {
    const select = 3;
    setBudget(select);
    console.log(budget);
    const res = await fetchApi(area, select, genre);
    console.log(res);
    setValue(res);
  };
  const setNago = async () => {
    const select = 0;
    setArea(select);
    const res = await fetchApi(select, budget, genre);
    setValue(res);
  };
  const setYambar = async () => {
    const select = 1;
    setArea(1);
    const res = await fetchApi(select, budget, genre);
    setValue(res);
  };
  const setGr = async (gr) => {
    const select = gr;
    setGenre(select);
    const res = await fetchApi(area, budget, select);
    setValue(res);
  };
  return (
    <div>
      <CustomAppBar />
      <Container>
        <Box p={1} textAlign="center">
          <Typography variant="h4">
            <Box>ジャンル</Box>
          </Typography>
        </Box>
        <Card variant="outlined" className={classes.root}>
          <Grid container className={classes.genre} justifyContent="center">
            <Grid item xs={2} className={classes.image}>
              <Box
                border={1}
                boxShadow={1}
                borderRadius="borderRadius"
                borderColor="grey.300"
                className={classes.button}
              >
                <Image alt="すべて" src="/book.png" width={100} height={100} />
                <Typography>すべて</Typography>
              </Box>
            </Grid>
            <Grid item xs={2} className={classes.image}>
              <Box
                border={1}
                boxShadow={1}
                borderRadius="borderRadius"
                borderColor="grey.300"
                className={classes.button}
              >
                <Image alt="居酒屋" src="/beer.png" width={100} height={100}  onClick={() => setGr(1)}/>
                <Typography>居酒屋</Typography>
              </Box>
            </Grid>
            <Grid item xs={2} className={classes.image}>
              <Box
                border={1}
                boxShadow={1}
                borderRadius="borderRadius"
                borderColor="grey.300"
                className={classes.button}
              >
                <Image alt="ダイニングバー・バル" src="/diningbar.png" width={100} height={100} onClick={() => setGr(2)}/>
                <Typography>ダイニングバー・バル</Typography>
              </Box>
            </Grid>
            <Grid item xs={2} className={classes.image}>
              <Box
                border={1}
                boxShadow={1}
                borderRadius="borderRadius"
                borderColor="grey.300"
                className={classes.button}
              >
                <Image alt="創作料理" src="/creativecusine.png" width={100} height={100} onClick={() => setGr(3)}/>
                <Typography>創作料理</Typography>
              </Box>
            </Grid>
            <Grid item xs={2} className={classes.image}>
              <Box
                border={1}
                boxShadow={1}
                borderRadius="borderRadius"
                borderColor="grey.300"
                className={classes.button}
              >
                <Image alt="和食" src="/japanese.png" width={100} height={100} onClick={() => setGr(4)}/>
                <Typography>和食</Typography>
              </Box>
            </Grid>
            <Grid item xs={2} className={classes.image}>
              <Box
                border={1}
                boxShadow={1}
                borderRadius="borderRadius"
                borderColor="grey.300"
                className={classes.button}
              >
                <Image alt="洋食" src="/western.png" width={100} height={100} />
                <Image alt="洋食" src="/western.png" width={100} height={100} onClick={() => setGr(5)}/>
                <Typography>洋食</Typography>
              </Box>
            </Grid>
            <Grid item xs={2} className={classes.image}>
              <Box
                border={1}
                boxShadow={1}
                borderRadius="borderRadius"
                borderColor="grey.300"
                className={classes.button}
              >
                <Image alt="イタリアン・フレンチ" src="/italian.png" width={100} height={100} />
                <Image alt="イタリアン・フレンチ" src="/italian.png" width={100} height={100} onClick={() => setGr(6)}/>
                <Typography>イタリアン・フレンチ</Typography>
              </Box>
            </Grid>
            <Grid item xs={2} className={classes.image}>
              <Box
                border={1}
                boxShadow={1}
                borderRadius="borderRadius"
                borderColor="grey.300"
                className={classes.button}
              >
                <Image alt="中華" src="/chinese.png" width={100} height={100} onClick={() => setGr(7)}/>
                <Typography>中華</Typography>
              </Box>
            </Grid>
            <Grid item xs={2} className={classes.image}>
              <Box
                border={1}
                boxShadow={1}
                borderRadius="borderRadius"
                borderColor="grey.300"
                className={classes.button}
              >
                <Image alt="焼肉・ホルモン" src="/bbq.png" width={100} height={100} onClick={() => setGr(8)} />
                <Typography>焼肉・ホルモン</Typography>
              </Box>
            </Grid>
            <Grid item xs={2} className={classes.image}>
              <Box
                border={1}
                boxShadow={1}
                borderRadius="borderRadius"
                borderColor="grey.300"
                className={classes.button}
              >
                <Image alt="韓国料理" src="/korean.png" width={100} height={100} onClick={() => setGr(9)} />
                <Typography>韓国料理</Typography>
              </Box>
            </Grid>
            <Grid item xs={2} className={classes.image}>
              <Box
                border={1}
                boxShadow={1}
                borderRadius="borderRadius"
                borderColor="grey.300"
                className={classes.button}
              >
                <Image alt="アジア・エスニック料理" src="/ethnic.png" width={100} height={100} onClick={() => setGr(10)} />
                <Typography>アジア・エスニック料理</Typography>
              </Box>
            </Grid>
            <Grid item xs={2} className={classes.image}>
              <Box
                border={1}
                boxShadow={1}
                borderRadius="borderRadius"
                borderColor="grey.300"
                className={classes.button}
              >
                <Image alt="各国料理" src="/nationalflags.png" width={100} height={100} onClick={() => setGr(11)} />
                <Typography>各国料理</Typography>
              </Box>
            </Grid>
            <Grid item xs={2} className={classes.image}>
              <Box
                border={1}
                boxShadow={1}
                borderRadius="borderRadius"
                borderColor="grey.300"
                className={classes.button}
              >
                <Image alt="カラオケ・パーティ" src="/karaoke.png" width={100} height={100} onClick={() => setGr(12)} />
                <Typography>カラオケ・パーティ</Typography>
              </Box>
            </Grid>
            <Grid item xs={2} className={classes.image}>
              <Box
                border={1}
                boxShadow={1}
                borderRadius="borderRadius"
                borderColor="grey.300"
                className={classes.button}
              >
                <Image alt="バー・カクテル" src="/cocktail.png" width={100} height={100} onClick={() => setGr(13)} />
                <Typography>バー・カクテル</Typography>
              </Box>
            </Grid>
            <Grid item xs={2} className={classes.image}>
              <Box
                border={1}
                boxShadow={1}
                borderRadius="borderRadius"
                borderColor="grey.300"
                className={classes.button}
              >
                <Image alt="ラーメン" src="/ramen.png" width={100} height={100} onClick={() => setGr(14)} />
                <Typography>ラーメン</Typography>
              </Box>
            </Grid>
            <Grid item xs={2} className={classes.image}>
              <Box
                border={1}
                boxShadow={1}
                borderRadius="borderRadius"
                borderColor="grey.300"
                className={classes.button}
              >
                <Image alt="お好み焼き・もんじゃ" src="/okonomiyaki.png" width={100} height={100} onClick={() => setGr(15)} />
                <Typography>お好み焼き・もんじゃ</Typography>
              </Box>
            </Grid>
            <Grid item xs={2} className={classes.image}>
              <Box
                border={1}
                boxShadow={1}
                borderRadius="borderRadius"
                borderColor="grey.300"
                className={classes.button}
              >
                <Image alt="カフェ・スイーツ" src="/cafe.png" width={100} height={100} onClick={() => setGr(16)} />
                <Typography>カフェ・スイーツ</Typography>
              </Box>
            </Grid>
            <Grid item xs={2} className={classes.image}>
              <Box
                border={1}
                boxShadow={1}
                borderRadius="borderRadius"
                borderColor="grey.300"
                className={classes.button}
              >
                <Image alt="その他グルメ" src="/others.png" width={100} height={100} onClick={() => setGr(17)} />
                <Typography>その他グルメ</Typography>
              </Box>
            </Grid>
          </Grid>
        </Card>
        {/* list-template */}
        <Box p={1} textAlign="center">
          <Typography variant="h4">価格帯</Typography>
        </Box>
        <Card variant="outlined">
          <Grid container justifyContent="center" className={classes.pricerenge} spacing={2}>
            <Grid item xs={2} onClick={setAll}>
              <Box
                p={1}
                border={1}
                boxShadow={1}
                borderRadius="borderRadius"
                borderColor="grey.300"
                className={classes.button}
              >
                <Typography variant="h6">すべて</Typography>
              </Box>
            </Grid>
            <Grid item xs={2} onClick={setLow}>
              <Box
                p={1}
                border={1}
                boxShadow={1}
                borderRadius="borderRadius"
                borderColor="grey.300"
                className={classes.button}
              >
                <Typography variant="h6">0円~1500円</Typography>
              </Box>
            </Grid>
            <Grid item xs={3} onClick={setMiddle}>
              <Box
                p={1}
                border={1}
                boxShadow={1}
                borderRadius="borderRadius"
                borderColor="grey.300"
                className={classes.button}
              >
                <Typography variant="h6">1500円~3000円</Typography>
              </Box>
            </Grid>
          </Grid>
        </Card>
        {/* <div>
          <CustomButton onClick={setNago}>名護</CustomButton>
          <CustomButton onClick={setYambar}>北部</CustomButton>
        </div> */}
        <Box p={1} textAlign="center">
          <Typography variant="h4">オススメ</Typography>
        </Box>
        <Card variant="outlined" className={classes.recomend}>
          <List>
            {value.results.shop.map((item, index) => {
              return (
                <ListItem key={index}>
                  <Link href={item.urls.pc}>
                    <Paper className={classes.root}>
                      <Card variant="outlined" className={classes.root}>
                        <Grid container className={classes.button}>
                          <Grid item xs={10}>
                            <CardContent className={classes.details}>
                              <Typography variant="h5">{item.name}</Typography>
                              <Typography variant="body1">
                                <p>{item.genre.name}</p>
                                <p>{item.catch}</p>
                                <p>{item.access}</p>
                              </Typography>
                            </CardContent>
                            <Grid container>
                              {/* <Grid item xs={4}>
                              <Button startIcon={<CallIcon />}>
                                call
                              </Button>
                            </Grid> */}
                              <Grid item xs={4}>
                                <Button startIcon={<HomeIcon />}>{item.address}</Button>
                              </Grid>
                              <Grid item xs={8}>
                                <Button startIcon={<AccessTimeIcon />}>{item.open}</Button>
                              </Grid>
                            </Grid>
                          </Grid>
                          <Grid item xs={2}>
                            <img src={item.photo.pc.l} alt={item.className} width={200} height={200} />
                          </Grid>
                        </Grid>
                      </Card>
                    </Paper>
                  </Link>
                </ListItem>
              );
            })}
          </List>
        </Card>
      </Container>
    </div>
  );
};

const useStyles = makeStyles({
  root: {
    display: 'flex',
    flexGrow: 1,
  },
  details: {
    display: 'flex',
    flexDirection: 'column',
  },
  content: {
    flex: '1 0 auto',
  },
  cover: {
    width: 151,
  },
  genre: {
    display: 'flex',
    height: 300,
    overflow: 'auto',
    padding: 5,
  },
  recomend: {
    display: 'flex',
    height: 1200,
    overflow: 'auto',
  },
  image: {
    textAlign: 'center',
    flexDirection: 'column',
    padding: 5,
  },
  pricerenge: {
    textAlign: 'center',
    padding: 10,
  },
  button: {
    '&:hover': {
      backgroundColor: '#f3f3f3',
      cursor: 'pointer',
    },
  },
});

export async function getServerSideProps() {
  // 取得テスト
  const res = await fetchApi(0, 3, 0);
  return {
    props: {
      gourmet: res,
    },
  };
}

export default Index;
