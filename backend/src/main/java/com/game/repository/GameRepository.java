package com.game.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.game.entity.Game;

public interface GameRepository extends JpaRepository<Game, Long> {

}
