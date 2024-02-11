import React, { useEffect } from "react";


import { Box, Button, Heading, Image, SimpleGrid, Table, TableCaption, TableContainer, Tbody, Td, Text, Tfoot, Th, Thead, Tr } from "@chakra-ui/react";
import { Link, useSearchParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useDomEvent } from "framer-motion";
import { getPlayerAction, getPlayerActionCsv } from "../Redux/players/action";

const Home = ()=>{ 
  
  const players =  useSelector(store=>store.playerReducer.players)
  console.log("mera data",players)
  const dispatch = useDispatch()
  
 

   
  
  useEffect(()=>{
    getPlayerAction(dispatch)
   },[])
  
  const handleClick = ()=>{
    getPlayerActionCsv(dispatch)
  }
  return (
    <div>
      <Heading>DashBoard</Heading>


      <TableContainer>
  <Table variant='simple'>
    <TableCaption>Player Name And History</TableCaption>
    <Thead>
      <Tr>
        <Th>USERNAME</Th>
        <Th>GAME</Th>
        <Th >RETING HISTORY</Th>
      </Tr>
    </Thead>
    <Tbody>
    {players?.map((player)=>{
     let  data = []
     const { ratingHistory } = player;
     const classicalRating = ratingHistory?.find(entry => entry.name === 'Classical');
      data = classicalRating.points.slice(-30)
   
     return <Tr key={player._id}>
     <Td>{player.username}</Td>
     <Td>Classical</Td>
     {data?.map(el=>{
     return  <Td key={el.data}>Date:{ el.date} ---- Rating:{el.rating}</Td>
     })}
   </Tr>
    })}
    </Tbody>
    
  </Table>
</TableContainer>
<Heading>DOWNLOAD FILE</Heading>
<Box m={4} onClick={handleClick}><Button>DOWNLOAD FILE</Button></Box>
 
    </div>
  );
};

export default Home;
