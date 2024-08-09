package com.arjun.service;

import java.time.LocalDate;
import java.time.LocalTime;
import java.util.List;
import java.util.stream.Collectors;

import org.springframework.ai.chat.client.ChatClient;
import org.springframework.ai.chat.client.ChatClient.ChatClientRequest.CallPromptResponseSpec;
import org.springframework.ai.chat.model.Generation;
import org.springframework.ai.chat.prompt.Prompt;
import org.springframework.ai.chat.prompt.PromptTemplate;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;


import com.arjun.model.Volunteer;
import com.arjun.repository.VolunteerRepository;



@Service
public class VolunteerService {

    private static final Logger logger = LoggerFactory.getLogger(VolunteerService.class);

    @Autowired
    private VolunteerRepository volunteerRepository;

    private ChatClient chatClient;

    public VolunteerService(ChatClient.Builder chatClientBuilder) {
        this.chatClient = chatClientBuilder.build();
    }

    public List<Volunteer> matchingVolunteers(LocalDate localDate, LocalTime localTime, String postalCode, String preferences) {
        // Prepare the AI prompt with the VIP's details
        String message = String.format(
            "Find available volunteers matching the following criteria:\n" +
            "Date: %s\n" +
            "Time: %s\n" +
            "Postal Code: %s\n" +
            "Preferences: %s\n" +
            "If no volunteers match, respond with 'Apologies, Travel Hands can't help you right now!'",
            localDate, localTime, postalCode, preferences
        );

        PromptTemplate promptTemplate = new PromptTemplate(message);
        Prompt prompt = promptTemplate.create();

        List<Generation> aiResponse;
        try {
            // Call the AI service
            CallPromptResponseSpec responseSpec = chatClient.prompt(prompt).call();
            aiResponse = responseSpec.chatResponse().getResults();

            // Check if the response is valid
            if (aiResponse == null || aiResponse.isEmpty()) {
                throw new RuntimeException("AI response is empty or null");
            }

        } catch (Exception e) {
            logger.error("Error calling AI service: {}", e.getMessage());
            throw new RuntimeException("Failed to retrieve AI response", e);
        }
     // Process AI response and filter volunteers
        List<Volunteer> volunteers = volunteerRepository.findByPostcode(postalCode);
        logger.info("Found {} matching volunteers", volunteers.size());

        List<Volunteer> matchingVolunteers = volunteers.stream()
            .filter(v -> v.getAvailabilityDate().equals(localDate))
            .collect(Collectors.toList());

        logger.info("Found {} volunteers available on the specified date", matchingVolunteers.size());

        return matchingVolunteers;
    }
        
}
