import React, { useEffect, useRef, useState } from "react";
import ContentContainer from "../ContentContainer";
const Game = (props)=>{
  const gameArea = useRef();

  useEffect(()=>{
    const gamePiece = new GamePiece();
    let canvas = gameArea.current;
    if (canvas){
      
    }
  }, [])
  
  return (
    <ContentContainer>
      <canvas ref={gameArea}/>
    </ContentContainer>
  )
}

class GamePiece {
  constructor(ctx){
    this.x = 0;
    this.y = 0;
    this.speed = 0
    this.gameArea = ctx;
  }

  update(){
    this.x = Math.min(this.x + this.speed, 400);
  }

  draw(){
    this.gameArea.save();
    this.gameArea.translate(this.x, this.y);
    this.gameArea.fillStyle = 'green';
    this.gameArea.fillRect(this.x, this.y, 40, 40)
    this.gameArea.restore();
  }
}

class Miao {
  constructor(ctx){
    this.gameArea = ctx;
    this.x = 0
    this.y = 0
  }

  update(){
    this.y += 1
  }

  draw(){
    this.gameArea.save();
    this.gameArea.translate(this.x, this.y);
    this.gameArea.fillStyle = 'green';
    this.gameArea.fillRect(this.x, this.y, 40, 40)
    this.gameArea.restore();
  }
}

class GameBord{

  constructor(gameArea){
    gameArea.width = 480;
    gameArea.height = 300;
    this.ctx = gameArea.getContext("2d");
    this.gamePiece = new GamePiece(this.ctx);
    this.obstacle = [];
  }

  update(){
    this.gamePiece.update()
    this.obstacle.forEach(x=>x.update());
    this.checkIntersection()
    this.gamePiece.draw()
    this.obstacle.forEach(x=>x.draw());
  }

  checkIntersection(){
    // TODO check intersction
  }

  
}

export default Game;