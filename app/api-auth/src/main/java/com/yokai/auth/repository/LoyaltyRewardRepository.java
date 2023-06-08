package com.yokai.auth.repository;

import com.yokai.auth.entity.LoyaltyRewardsEntity;
import org.springframework.data.domain.Example;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;

import org.springframework.data.jpa.repository.Query;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.transaction.annotation.Transactional;


import java.util.Optional;
import java.util.List;

@RepositoryRestResource
public interface LoyaltyRewardRepository extends JpaRepository<LoyaltyRewardsEntity, Integer> {

  
  
    Optional<LoyaltyRewardsEntity> findByUniqueKey(Integer uniqueKey);
    List<LoyaltyRewardsEntity> findByTierNumber(Integer tierNumber);

    

}