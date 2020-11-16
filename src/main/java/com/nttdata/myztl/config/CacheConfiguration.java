package com.nttdata.myztl.config;

import io.github.jhipster.config.JHipsterProperties;
import io.github.jhipster.config.cache.PrefixedKeyGenerator;
import java.time.Duration;
import org.ehcache.config.builders.*;
import org.ehcache.jsr107.Eh107Configuration;
import org.hibernate.cache.jcache.ConfigSettings;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.autoconfigure.cache.JCacheManagerCustomizer;
import org.springframework.boot.autoconfigure.orm.jpa.HibernatePropertiesCustomizer;
import org.springframework.boot.info.BuildProperties;
import org.springframework.boot.info.GitProperties;
import org.springframework.cache.annotation.EnableCaching;
import org.springframework.cache.interceptor.KeyGenerator;
import org.springframework.context.annotation.*;

@Configuration
@EnableCaching
public class CacheConfiguration {
    private GitProperties gitProperties;
    private BuildProperties buildProperties;
    private final javax.cache.configuration.Configuration<Object, Object> jcacheConfiguration;

    public CacheConfiguration(JHipsterProperties jHipsterProperties) {
        JHipsterProperties.Cache.Ehcache ehcache = jHipsterProperties.getCache().getEhcache();

        jcacheConfiguration =
            Eh107Configuration.fromEhcacheCacheConfiguration(
                CacheConfigurationBuilder
                    .newCacheConfigurationBuilder(Object.class, Object.class, ResourcePoolsBuilder.heap(ehcache.getMaxEntries()))
                    .withExpiry(ExpiryPolicyBuilder.timeToLiveExpiration(Duration.ofSeconds(ehcache.getTimeToLiveSeconds())))
                    .build()
            );
    }

    @Bean
    public HibernatePropertiesCustomizer hibernatePropertiesCustomizer(javax.cache.CacheManager cacheManager) {
        return hibernateProperties -> hibernateProperties.put(ConfigSettings.CACHE_MANAGER, cacheManager);
    }

    @Bean
    public JCacheManagerCustomizer cacheManagerCustomizer() {
        return cm -> {
            createCache(cm, com.nttdata.myztl.repository.UserRepository.USERS_BY_LOGIN_CACHE);
            createCache(cm, com.nttdata.myztl.repository.UserRepository.USERS_BY_EMAIL_CACHE);
            createCache(cm, com.nttdata.myztl.domain.User.class.getName());
            createCache(cm, com.nttdata.myztl.domain.Authority.class.getName());
            createCache(cm, com.nttdata.myztl.domain.User.class.getName() + ".authorities");
            createCache(cm, com.nttdata.myztl.domain.TipologiaZona.class.getName());
            createCache(cm, com.nttdata.myztl.domain.Varco.class.getName());
            createCache(cm, com.nttdata.myztl.domain.Varco.class.getName() + ".gruppoVarchis");
            createCache(cm, com.nttdata.myztl.domain.GruppoVarchi.class.getName());
            createCache(cm, com.nttdata.myztl.domain.GruppoVarchi.class.getName() + ".posiziones");
            createCache(cm, com.nttdata.myztl.domain.GruppoVarchi.class.getName() + ".zonas");
            createCache(cm, com.nttdata.myztl.domain.TipologiaVeicolo.class.getName());
            createCache(cm, com.nttdata.myztl.domain.TipologiaVeicolo.class.getName() + ".regolaOrarias");
            createCache(cm, com.nttdata.myztl.domain.Festivita.class.getName());
            createCache(cm, com.nttdata.myztl.domain.RegolaOraria.class.getName());
            createCache(cm, com.nttdata.myztl.domain.RegolaOraria.class.getName() + ".tipologiaVeicolos");
            createCache(cm, com.nttdata.myztl.domain.RegolaOraria.class.getName() + ".profiloOrarios");
            createCache(cm, com.nttdata.myztl.domain.ProfiloOrario.class.getName());
            createCache(cm, com.nttdata.myztl.domain.ProfiloOrario.class.getName() + ".regolaOrarias");
            createCache(cm, com.nttdata.myztl.domain.Autorizzazione.class.getName());
            createCache(cm, com.nttdata.myztl.domain.Autorizzazione.class.getName() + ".permessoTemporaneos");
            createCache(cm, com.nttdata.myztl.domain.Zona.class.getName());
            createCache(cm, com.nttdata.myztl.domain.Zona.class.getName() + ".gruppoVarchis");
            createCache(cm, com.nttdata.myztl.domain.TipologiaPermesso.class.getName());
            createCache(cm, com.nttdata.myztl.domain.DurataCosto.class.getName());
            createCache(cm, com.nttdata.myztl.domain.Motivazione.class.getName());
            createCache(cm, com.nttdata.myztl.domain.Calendarizzazione.class.getName());
            createCache(cm, com.nttdata.myztl.domain.TestX.class.getName());
            createCache(cm, com.nttdata.myztl.domain.PermessoTemporaneo.class.getName());
            createCache(cm, com.nttdata.myztl.domain.PermessoTemporaneo.class.getName() + ".autorizzazionis");
            // jhipster-needle-ehcache-add-entry
        };
    }

    private void createCache(javax.cache.CacheManager cm, String cacheName) {
        javax.cache.Cache<Object, Object> cache = cm.getCache(cacheName);
        if (cache == null) {
            cm.createCache(cacheName, jcacheConfiguration);
        }
    }

    @Autowired(required = false)
    public void setGitProperties(GitProperties gitProperties) {
        this.gitProperties = gitProperties;
    }

    @Autowired(required = false)
    public void setBuildProperties(BuildProperties buildProperties) {
        this.buildProperties = buildProperties;
    }

    @Bean
    public KeyGenerator keyGenerator() {
        return new PrefixedKeyGenerator(this.gitProperties, this.buildProperties);
    }
}
